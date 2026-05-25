import dotenv from "dotenv";

dotenv.config();

const DEFAULT_PORT = 3000;

function parsePort(value: string | undefined): number {
  const parsedPort = Number(value ?? DEFAULT_PORT);

  if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
    throw new Error("PORT must be a positive integer");
  }

  return parsedPort;
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: parsePort(process.env.PORT),
};
