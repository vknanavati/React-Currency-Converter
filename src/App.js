import { useState } from 'react';

function App() {
  const [currencyOne, setCurrencyOne] = useState("");
  return (
    <>
      <h2>Currency Conveter</h2>
      <input
        onChange={e => setCurrencyOne(e.target.value)}
      />
      <div>
        <label>currency
          <select>
            <option>USD</option>
            <option>CAD</option>
          </select>
        </label>
      </div>
      <div>=</div>
      <input
      />
      <div>
        <label>currency
          <select>
            <option>USD</option>
            <option>CAD</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default App;
