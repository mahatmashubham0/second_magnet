import React from "react";
import './Success.css'

const Success = () => {
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
        <h1 style={{color: 'green'}}>Payment Successful</h1>
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
