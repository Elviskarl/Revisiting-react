import { useEffect, useState } from "react";
import { Output } from "./useCurrencyConverter.ts";

function useGetCurrencyTypes() {
  const [data, setData] = useState<Output>({});
  useEffect(() => {
    const request = new Request(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    );
    const response = fetch(request)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return data;
}
export default useGetCurrencyTypes;
