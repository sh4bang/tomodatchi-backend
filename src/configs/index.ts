import 'dotenv/config';

export const config = {
    port: parseInt(process.env.PORT || '3000'),
    mongoUri: process.env.MONGO_URI || '',
};