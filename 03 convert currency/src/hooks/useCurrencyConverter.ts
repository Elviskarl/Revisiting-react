import { useEffect, useState } from "react";

export type Output = {};

function useCurrencyConverter(currency: string) {
  const [data, setData] = useState<Output>({});
  useEffect(() => {
    const today = new Date();
    const date = today.toISOString().split("T")[0];
    const request = new Request(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`
    );
    const response = fetch(request)
      .then((obj) => obj.json())
      .then((data) => setData(data[currency]))
      .catch((error) => console.log(error));
  }, [currency]);
  return data;
}

export default useCurrencyConverter;
