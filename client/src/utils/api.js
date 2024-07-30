import axios from "axios";
const baseUrl = 'http://localhost:1337'

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STAPI,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    // console.log("1",process.env.REACT_BACKEND_API)
    console.log("2",baseUrl + url,
        params)
    const { data } = await axios.get(
        baseUrl + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const makePayment = axios.create({
  baseUrl: baseUrl,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STAPI,
  },
})