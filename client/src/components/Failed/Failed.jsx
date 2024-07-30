import React from "react";
import './Failed.css'

const Failed = () => {
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
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
        <h1>Payment Failed</h1>
        <p>
          Oops! There was an issue with your payment. Please try again later.
        </p>
        <a href="/" class="btn">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Failed;
