import { Output } from "../hooks/useCurrencyConverter.ts";
import useGetCurrencyTypes from "../hooks/useGetCurrencyTypes.ts";

interface propTypes {
  baseCurrencyType?: string;
  endCurrencyType?: string;
  baseAmount?: number;
  setBaseAmount: (param: number) => void;
  setBaseCurrencyType: (param: string) => void;
  setEndCurrencyType: (param: string) => void;
  currencyData: Output;
  convertedAmount: number;
  isConversionSection: boolean;
}
export default function InputBox({
  baseCurrencyType,
  baseAmount,
  setBaseAmount,
  setBaseCurrencyType,
  setEndCurrencyType,
  currencyData,
  endCurrencyType,
  convertedAmount,
  isConversionSection,
}: propTypes) {
  const options = Object.keys(currencyData);
  const supportedCurrencies = useGetCurrencyTypes();

  const currencyOptions = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });
  return !isConversionSection ? (
    <>
      <section className="currency__converter">
        <label htmlFor="baseAmount">Amount: </label>
        <input
          type="number"
          name="baseAmount"
          id="baseAmount"
          value={baseAmount}
          min={1}
          onChange={(e) => setBaseAmount(+e.target.value)}
        />
        <label htmlFor="denomination">Currency Type</label>
        <input
          type="text"
          name="denomination"
          id="denomination"
          value={`${supportedCurrencies[baseCurrencyType]} (${baseCurrencyType})`}
        />
        <select
          name="denomination"
          id="denomination"
          value={baseCurrencyType}
          onChange={(e) => setBaseCurrencyType(e.target.value)}
        >
          {currencyOptions}
        </select>
      </section>
    </>
  ) : (
    <>
      <section className="currency__converter">
        <label htmlFor="convertedAmount">Amount: </label>
        <input
          type="number"
          name="convertedAmount"
          id="convertedAmount"
          value={convertedAmount}
          onChange={(e) => setBaseAmount(+e.target.value)}
          required
          readOnly
        />
        <label htmlFor="denomination">Currency Type</label>
        <input
          type="text"
          name="denomination"
          id="denomination"
          value={`${supportedCurrencies[endCurrencyType]} (${endCurrencyType})`}
          readOnly
        />
        <select
          name="denomination"
          id="denomination"
          value={endCurrencyType}
          onChange={(e) => setEndCurrencyType(e.target.value)}
        >
          {currencyOptions}
        </select>
      </section>
    </>
  );
}
