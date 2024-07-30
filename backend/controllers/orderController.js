import { Order } from '../models/order.js';
import { Stripe } from 'stripe';


const stripe = Stripe('sk_test_51PhpUb2MQTsmWyUNl9eYioiWihsBH8ktIuYp5EMc8WotPBdtL7ng3ltfvUbjoaEQso9dVkAruNzZmOjGVxwNAork00ouKnJzya');

// Create Checkout Session Endpoint
export const ProductOrder = async (req, res) => {

  // // Get data from user page
  // const { email, items } = req.body;
  // console.log('Email:', email);
  // console.log('Items:', items);

  // // Ensure items is defined and is an array otherwise generate the error
  // if (!items || !Array.isArray(items) || items.length === 0) {
  //   return res.status(400).json({ error: 'Invalid items' });
  // }

  // // Create line items for Stripe 
  // try {
  //   const lineItemsOfProduct = items.map(item => {
  //     if (!item || !item.attributes || !item.attributes.price || !item.attributes.title) {
  //       throw new Error(`Missing properties in item: ${JSON.stringify(item)}`);
  //     }

  //     const priceInCents = Math.round(parseFloat(item.attributes.price) * 100); // Ensure price is in cents
  //     if (isNaN(priceInCents) || priceInCents <= 0) {
  //       throw new Error(`Invalid price for item ${item.attributes.title}: ${item.attributes.price}`);
  //     }

  //     return {
  //       price_data: {
  //         currency: 'usd',
  //         product_data: {
  //           name: item.attributes.title,
  //         },
  //         unit_amount: priceInCents, // Stripe expects amount
  //       },
  //       quantity: item.attributes.quantity || 1, // Default quantity to 1 if not specified
  //     };
  //   });

  //   console.log('Line Items:', lineItemsOfProduct);

  //   const session = await stripe.checkout.sessions.create({
  //     payment_method_types: ['card'],
  //     line_items: lineItemsOfProduct,
  //     mode: 'payment',
  //     success_url: 'http://localhost:3000/success',  // move this page
  //     cancel_url: 'http://localhost:3000/failed',    // move this page
  //     customer_email: email,
  //   });

  //   console.log('Session:', session);

  //   // Save order to database with 'pending' status
  //   await Order.create({
  //     email,
  //     items: items.map(item => item.id),
  //     transactionId: session.id,
  //     paymentIntentId: session.payment_intent,
  //   });

  //   res.json({ id: session.id });
  // } catch (error) {
  //   console.error('Error creating session:', error);
  //   res.status(500).json({ error: error.message });
  // }

//   import { Order } from '../models/order.js';
// import { Stripe } from 'stripe';

// const stripe = Stripe('sk_test_51PhpUb2MQTsmWyUNl9eYioiWihsBH8ktIuYp5EMc8WotPBdtL7ng3ltfvUbjoaEQso9dVkAruNzZmOjGVxwNAork00ouKnJzya');

// Create Checkout Session Endpoint
// export const ProductOrder = async (req, res) => {
  const { email, items } = req.body;
  console.log('Email:', email);
  console.log('Items:', items);

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Invalid items' });
  }

  try {
    const lineItemsOfProduct = items.map(item => {
      if (!item || !item.attributes || !item.attributes.price || !item.attributes.title) {
        throw new Error(`Missing properties in item: ${JSON.stringify(item)}`);
      }

      const priceInCents = Math.round(parseFloat(item.attributes.price) * 100); // Ensure price is in cents
      if (isNaN(priceInCents) || priceInCents <= 0) {
        throw new Error(`Invalid price for item ${item.attributes.title}: ${item.attributes.price}`);
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.attributes.title,
          },
          unit_amount: priceInCents,
        },
        quantity: item.attributes.quantity || 1, // Default quantity to 1 if not specified
      };
    });

    console.log('Line Items:', lineItemsOfProduct);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItemsOfProduct,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/failed',
      customer_email: email,
    });

    console.log('Session:', session);

    // Save order to database with 'pending' status and Payment Intent ID if available
    const paymentIntentId = session.payment_intent || 'Not Available'; // Use default value if payment_intent is not available
    await Order.create({
      email,
      items: items.map(item => item.id),
      transactionId: session.id,
      paymentIntentId: paymentIntentId,
      paymentStatus: 'pending', // Initial status before payment completion
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: error.message });
  }
};




// Stripe Webhook Endpoint
export const createWebhook = async (req, res) => {
 
  const endpointSecret = 'whsec_c602cf070beda7965af8f4e00c53ca673fc6d5ede0abf74e03e524f287075201'; // Replace with your webhook secret
  const sig = req.headers['stripe-signature'];
  const event = req.body;

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      await Order.findOneAndUpdate(
        { transactionId: session.id },
        { paymentStatus: 'completed' },
        { new: true }
      );
    }

    res.status(200).json({ received: true });
  } catch (error) {
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
};
