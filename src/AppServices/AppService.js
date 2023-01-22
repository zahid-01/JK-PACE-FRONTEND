import axios from "axios";
export const apiUrl =  'https://jkpace-poni.onrender.com'


async function execute(url, method) {
  const res = await axios(url, method);
  return res;
}

export async function getRequest(url) {
  return await execute(url, "POST");
}