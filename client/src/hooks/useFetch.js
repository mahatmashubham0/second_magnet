import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const useFetch = (endPoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    makeApi();
  }, [endPoint]);

  const makeApi = async () => {
    const res = await fetchDataFromApi(endPoint);
    setData(res);
  };

  return {data}
};
