import Razorpay from 'razorpay';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface IRazorpayConfig {
    key_id: string;
    key_secret: string;
}

export const createRazorpayInstance = () => {
    const config: IRazorpayConfig = {
        key_id: process.env.RAZORPAY_KEY_ID || '',  // Provide default value
        key_secret: process.env.RAZORPAY_KEY_SECRET || '',  // Provide default value
    };

    return new Razorpay(config);
};
