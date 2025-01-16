const BACKEND_URL = "https://payment-backend-2scd.onrender.com";

export async function getData() {
  const response = await fetch(`${BACKEND_URL}/api/data`);
  return await response.json();
}
