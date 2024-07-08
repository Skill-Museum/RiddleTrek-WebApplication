import { config } from "dotenv";

config();
export const HttpStatus = {
  HTTP_VERSION_NOT_SUPPORTED: 505,
  INSUFFICIENT_STORAGE: 507,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
};

export let apiKey = process.env.API_KEY_HERE;
