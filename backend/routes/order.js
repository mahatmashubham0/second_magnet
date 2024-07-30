import express from "express";
import { ProductOrder } from "../controllers/orderController.js";


const router = express.Router();

// create the session api
router.post('/create-checkout-session',ProductOrder);

export default router;
