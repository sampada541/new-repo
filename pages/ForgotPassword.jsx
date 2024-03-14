import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send a password reset link to the provided email
    // For simplicity, let's just display a message here
    setMessage(`A password reset link has been sent to ${email}`);
    setEmail('');
  };

  return (
    <div>
      <style>
        {`
          *,
          *::before,
          *::after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          body {
            background-color: #000112;
            font-family: 'Poppins', sans-serif;
          }

          form {
            width: 90%; /* Adjust the width */
            max-width: 500px; /* Set max-width for larger screens */
            background-color: rgba(255, 255, 255, 0.13);
            margin: 10% auto; /* Center the form */
            border-radius: 10px;
            padding: 30px; /* Adjust the padding */
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: left;
          }

          form * {
            color: #ffffff;
            outline: none;
            border: none;
          }

          form h2 {
            font-size: 24px; /* Adjust the font size */
            font-weight: 500;
            line-height: 32px;
            text-align: left;
            margin-bottom: 20px; /* Adjust the margin */
          }

          label {
            display: block;
            margin-top: 15px; /* Adjust the margin */
            font-size: 16px;
            font-weight: 500;
          }

          input {
            width: 100%;
            height: 25px; /* Adjust the height */
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 13px;
            padding: 0 10px;
            margin-top: 8px;
            font-size: 14px;
            font-weight: 400;
          }

          ::placeholder {
            color: #e5e5e5;
          }

          button {
            margin-top: 30px; /* Adjust the margin */
            width: 100%;
            background-color: #ffffff;
            color: #080710;
            padding: 12px 0; /* Adjust the padding */
            font-size: 16px; /* Adjust the font size */
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background: linear-gradient(#616161, #424242);
          }
        `}
      </style>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
