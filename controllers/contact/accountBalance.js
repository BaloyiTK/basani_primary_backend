import asyncHandler from "express-async-handler";
import axios from "axios";
import { Buffer } from 'buffer';

const AccountBalance = asyncHandler(async (req, res) => {
  try {
    const apiKey = '30adaa49-4e45-440a-ac08-df04e951416a';
    const apiSecret = 'ilpQ+PCN6qX/hAXCaE4+SPZHjIr/gg1P';

    // Define the API endpoint for retrieving account info
    const apiUrl = 'https://rest.smsportal.com/v2/balance';
    
    // Encode the API key and secret in Base64 format
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    // Make the API request using Axios
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      }
    });

    // Parse the response and extract the SMS credits balance


    // Send the SMS credits balance to the client
    return res.status(200).json({ balance: response.data.balance });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve SMS credits balance' });
  }
});

export default AccountBalance;
