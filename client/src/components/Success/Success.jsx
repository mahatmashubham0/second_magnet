import React from "react";
import "./Success.css";
import axios from "axios";

const Success = () => {
  const testWebhook = async () => {
    try {
      const response = await axios.post("http://localhost:4000/webhook", {
        // Simulate webhook payload
        type: "checkout.session.completed",
        data: {
          object: {
            id: "cs_test_123", // Simulated session ID
            // Add other relevant data as needed
          },
        },
      });

      console.log("Webhook test response:", response.data);
    } catch (error) {
      console.error("Error testing webhook:", error.message);
    }
  };

  return (
    <div class="container">
      <div class="message-box">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div className="test-webhook-btn" onClick={testWebhook}>
          <button className="button">Test Webhook</button>
        </div>

        <hr />
        <h1 style={{ color: "green" }}>Payment Successful</h1>
        <p>
          Thank you for your purchase! Your payment was processed successfully.
        </p>
        <a href="/" class="btn">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Success;
