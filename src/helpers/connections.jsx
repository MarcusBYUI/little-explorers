import axios from "axios";
const BASEURL = "https:///";
//const BASEURL = "http://localhost:3001/";

export default async function apiRequest(
  path,
  body = {},
  method = "get",
  auth
) {
  return new Promise(async (resolve, reject) => {
    let header = {};
    if (auth && auth.state)
      header = {
        Authorization: `Bearer ${auth.token}`,
      };
    try {
      const response = await axios({
        method: method,
        url: BASEURL + path,
        headers: header,
        data: body,
      });
      resolve(response.data);
    } catch (err) {
      const error = new Error(err.message);
      error.info = err?.response?.data;
      reject(error);
    }
  });
}
