import { useState } from 'react'
import CurrencySwitcher from './components/CurrencySwitcher';
import Display from './components/Display';
import Form from './components/forms';

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("EUR");

  const handleCurrencyChange = () => {
    if (currency === "EUR") {
      setCurrency("USD");
    } else if (currency === "USD") {
      setCurrency("EUR");
    }
  };


  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher
        handleChangeCurrency={handleCurrencyChange}
        currency={currency}
      />
      <Form />
    </div>

  );
}

export default App;

