import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};


export const LAT_COMPANY = process.env.LAT_COMPANY || "-6.184461"
export const LON_COMPANY = process.env.LON_COMPANY || "106.931157"


export default config;