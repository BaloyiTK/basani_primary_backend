import asyncHandler from "express-async-handler";
import axios from "axios";
import { Buffer } from 'buffer';

const AccountBalance = asyncHandler(async (req, res) => {

    console.log("balance")
  try {
    // Define your API credentials
    const apiKey = 'f13d2b22-f30c-4776-be20-df370a4742c0';
    const apiSecret = 'u0wERZu5lBXL2Adh/rzRHMGyoQ0RZtmq';

   // https://api.smsportal.com/api5/http5.aspx?Type=credits&prosperk59=xxx&@#Tiyani123=yyy

 //  http://api.smsportal.com/api5/http5.aspx?Type=credits&username=prosperk59&password=@#Tiyani123

    // Define the API endpoint for retrieving account info
    const apiUrl = 'https://api.smsportal.com/v1/Accounts/AccountInfo';

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
