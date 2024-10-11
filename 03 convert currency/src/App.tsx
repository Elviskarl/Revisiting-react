import InputBox from "./components/InputBox";
import "./App.css";
import { useState } from "react";
import useCurrencyConverter from "./hooks/useCurrencyConverter.ts";

function App() {
  const [baseCurrencyType, setBaseCurrencyType] = useState("kes");
  const [endCurrencyType, setEndCurrencyType] = useState("zwl");
  const [baseAmount, setBaseAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  let isConversionSection = false;

  const currencyData = useCurrencyConverter(baseCurrencyType);
  console.log(currencyData);

  function swapCurrency(): void {
    setBaseCurrencyType(endCurrencyType);
    setEndCurrencyType(baseCurrencyType);
    setBaseAmount(convertedAmount);
    setConvertedAmount(baseAmount);
  }
  function convertCurrency() {
    setConvertedAmount(baseAmount * currencyData[endCurrencyType]);
  }
  return (
    <>
      <header>
        <h1>Convert currency</h1>
      </header>
      <main>
        <section>
          <p>
            Convert your currency into any denomination.
            <br />
            We support over 100 denominations giving you plenty to choose from.
          </p>
        </section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <h3 className="currency--identifier">From</h3>
          <InputBox
            baseCurrencyType={baseCurrencyType}
            setBaseCurrencyType={setBaseCurrencyType}
            setEndCurrencyType={setEndCurrencyType}
            baseAmount={baseAmount}
            setBaseAmount={setBaseAmount}
            currencyData={currencyData}
            convertedAmount={convertedAmount}
            isConversionSection={isConversionSection}
          />
          <h3 className="currency--identifier">To</h3>
          <InputBox
            endCurrencyType={endCurrencyType}
            setBaseAmount={setBaseAmount}
            setEndCurrencyType={setEndCurrencyType}
            convertedAmount={convertedAmount}
            currencyData={currencyData}
            setBaseCurrencyType={setBaseCurrencyType}
            isConversionSection={!isConversionSection}
          />
          <button onClick={convertCurrency} className="submit--button">
            Convert Currency
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
