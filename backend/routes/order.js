import express from "express";
import { createWebhook, ProductOrder } from "../controllers/orderController.js";


const router = express.Router();


// create the session api
router.post('/create-checkout-session',ProductOrder);

// create the webhook
router.post('/webhook', createWebhook);

export default router;
