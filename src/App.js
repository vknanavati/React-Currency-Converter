import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("");
  const [conversion, setConversion] = useState("")

  console.log("amount:", amount)
  console.log("from:", from)
  console.log("to:", to)

  const handleClick = e => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("apikey", "v12HwdRRmHScKldGKk0OoYqIDiHVKfiD");
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    console.log("Searching conversion:", "from", from, "to", to)
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("currency data:", data)
        setConversion(data)

      })
      .catch(error => console.log('error', error));

  }

  console.log("Conversion:", conversion)

  return (
    <>
      <h2>Currency Conveter</h2>

      <form>
        <input
          onChange={e => setAmount(e.target.value)}
        />
        <div>
          <label>From
            <select
              onChange={e => setFrom(e.target.value)}
            >
              <option>choose currency</option>
              <option>AED</option>
              <option>AFN</option>
              <option>ALL</option>
              <option>AMD</option>
              <option>ANG</option>
              <option>AOA</option>
              <option>ARS</option>
              <option>AUD</option>
              <option>AWG</option>
              <option>AZN</option>
              <option>BAM</option>
              <option>BBD</option>
              <option>BDT</option>
              <option>BGN</option>
              <option>BHD</option>
              <option>BIF</option>
              <option>BMD</option>
              <option>BND</option>
              <option>BOB</option>
              <option>BRL</option>
              <option>BSD</option>
              <option>BTC</option>
              <option>BTN</option>
              <option>BWP</option>
              <option>BYN</option>
              <option>BYR</option>
              <option>BZD</option>
              <option>CAD</option>
              <option>CDF</option>
              <option>CHF</option>
              <option>CLF</option>
              <option>CNY</option>
              <option>CNH</option>
              <option>COP</option>
              <option>CRC</option>
              <option>CUC</option>
              <option>CUP</option>
              <option>CVE</option>
              <option>CZK</option>
              <option>DJF</option>
              <option>DKK</option>
              <option>DOP</option>
              <option>DZD</option>
              <option>EGP</option>
              <option>ERN</option>
              <option>ETB</option>
              <option>EUR</option>
              <option>FJD</option>
              <option>FKP</option>
              <option>GBP</option>
              <option>GEL</option>
              <option>GGP</option>
              <option>GHS</option>
              <option>GIP</option>
              <option>GMD</option>
              <option>GNF</option>
              <option>GTQ</option>
              <option>GYD</option>
              <option>HKD</option>
              <option>HNL</option>
              <option>HRK</option>
              <option>HTG</option>
              <option>HUF</option>
              <option>IDR</option>
              <option>ILS</option>
              <option>IMP</option>
              <option>INR</option>
              <option>IQD</option>
              <option>IRR</option>
              <option>ISK</option>
              <option>JEP</option>
              <option>JMD</option>
              <option>JOD</option>
              <option>JPY</option>
              <option>KES</option>
              <option>KGS</option>
              <option>KHR</option>
              <option>KMF</option>
              <option>KPW</option>
              <option>KRW</option>
              <option>KWD</option>
              <option>KYD</option>
              <option>KZT</option>
              <option>LAK</option>
              <option>LBP</option>
              <option>LKR</option>
              <option>LRD</option>
              <option>LSL</option>
              <option>LTL</option>
              <option>LVL</option>
              <option>LYD</option>
              <option>MAD</option>
              <option>MDL</option>
              <option>MGA</option>
              <option>MKD</option>
              <option>MMK</option>
              <option>MNT</option>
              <option>MOP</option>
              <option>MRU</option>
              <option>MUR</option>
              <option>MVR</option>
              <option>MWK</option>
              <option>MXN</option>
              <option>MYR</option>
              <option>MZN</option>
              <option>NAD</option>
              <option>NGN</option>
              <option>NIO</option>
              <option>NOK</option>
              <option>NPR</option>
              <option>NZD</option>
              <option>OMR</option>
              <option>PAB</option>
              <option>PEN</option>
              <option>PGK</option>
              <option>PHP</option>
              <option>PKR</option>
              <option>PLN</option>
              <option>PYG</option>
              <option>QAR</option>
              <option>RON</option>
              <option>RSD</option>
              <option>RUB</option>
              <option>RWF</option>
              <option>SAR</option>
              <option>SBD</option>
              <option>SCR</option>
              <option>SDG</option>
              <option>SEK</option>
              <option>SGD</option>
              <option>SHP</option>
              <option>SLE</option>
              <option>SLL</option>
              <option>SOS</option>
              <option>SRD</option>
              <option>STD</option>
              <option>SVC</option>
              <option>SYP</option>
              <option>SZL</option>
              <option>THB</option>
              <option>TJS</option>
              <option>TMT</option>
              <option>TND</option>
              <option>TOP</option>
              <option>TRY</option>
              <option>TTD</option>
              <option>TWD</option>
              <option>TZS</option>
              <option>UAH</option>
              <option>UGX</option>
              <option>USD</option>
              <option>UYU</option>
              <option>UZS</option>
              <option>VEF</option>
              <option>VES</option>
              <option>VND</option>
              <option>VUV</option>
              <option>WST</option>
              <option>XAF</option>
              <option>XAG</option>
              <option>XAU</option>
              <option>XCD</option>
              <option>XDR</option>
              <option>XOF</option>
              <option>XPF</option>
              <option>YER</option>
              <option>ZAR</option>
              <option>ZMK</option>
              <option>ZMW</option>
              <option>ZWL</option>
            </select>
          </label>
        </div>

        <div>
          <label>To
            <select
              onChange={e => setTo(e.target.value)}
            >
              <option>choose currency</option>
              <option>AED</option>
              <option>AFN</option>
              <option>ALL</option>
              <option>AMD</option>
              <option>ANG</option>
              <option>AOA</option>
              <option>ARS</option>
              <option>AUD</option>
              <option>AWG</option>
              <option>AZN</option>
              <option>BAM</option>
              <option>BBD</option>
              <option>BDT</option>
              <option>BGN</option>
              <option>BHD</option>
              <option>BIF</option>
              <option>BMD</option>
              <option>BND</option>
              <option>BOB</option>
              <option>BRL</option>
              <option>BSD</option>
              <option>BTC</option>
              <option>BTN</option>
              <option>BWP</option>
              <option>BYN</option>
              <option>BYR</option>
              <option>BZD</option>
              <option>CAD</option>
              <option>CDF</option>
              <option>CHF</option>
              <option>CLF</option>
              <option>CNY</option>
              <option>CNH</option>
              <option>COP</option>
              <option>CRC</option>
              <option>CUC</option>
              <option>CUP</option>
              <option>CVE</option>
              <option>CZK</option>
              <option>DJF</option>
              <option>DKK</option>
              <option>DOP</option>
              <option>DZD</option>
              <option>EGP</option>
              <option>ERN</option>
              <option>ETB</option>
              <option>EUR</option>
              <option>FJD</option>
              <option>FKP</option>
              <option>GBP</option>
              <option>GEL</option>
              <option>GGP</option>
              <option>GHS</option>
              <option>GIP</option>
              <option>GMD</option>
              <option>GNF</option>
              <option>GTQ</option>
              <option>GYD</option>
              <option>HKD</option>
              <option>HNL</option>
              <option>HRK</option>
              <option>HTG</option>
              <option>HUF</option>
              <option>IDR</option>
              <option>ILS</option>
              <option>IMP</option>
              <option>INR</option>
              <option>IQD</option>
              <option>IRR</option>
              <option>ISK</option>
              <option>JEP</option>
              <option>JMD</option>
              <option>JOD</option>
              <option>JPY</option>
              <option>KES</option>
              <option>KGS</option>
              <option>KHR</option>
              <option>KMF</option>
              <option>KPW</option>
              <option>KRW</option>
              <option>KWD</option>
              <option>KYD</option>
              <option>KZT</option>
              <option>LAK</option>
              <option>LBP</option>
              <option>LKR</option>
              <option>LRD</option>
              <option>LSL</option>
              <option>LTL</option>
              <option>LVL</option>
              <option>LYD</option>
              <option>MAD</option>
              <option>MDL</option>
              <option>MGA</option>
              <option>MKD</option>
              <option>MMK</option>
              <option>MNT</option>
              <option>MOP</option>
              <option>MRU</option>
              <option>MUR</option>
              <option>MVR</option>
              <option>MWK</option>
              <option>MXN</option>
              <option>MYR</option>
              <option>MZN</option>
              <option>NAD</option>
              <option>NGN</option>
              <option>NIO</option>
              <option>NOK</option>
              <option>NPR</option>
              <option>NZD</option>
              <option>OMR</option>
              <option>PAB</option>
              <option>PEN</option>
              <option>PGK</option>
              <option>PHP</option>
              <option>PKR</option>
              <option>PLN</option>
              <option>PYG</option>
              <option>QAR</option>
              <option>RON</option>
              <option>RSD</option>
              <option>RUB</option>
              <option>RWF</option>
              <option>SAR</option>
              <option>SBD</option>
              <option>SCR</option>
              <option>SDG</option>
              <option>SEK</option>
              <option>SGD</option>
              <option>SHP</option>
              <option>SLE</option>
              <option>SLL</option>
              <option>SOS</option>
              <option>SRD</option>
              <option>STD</option>
              <option>SVC</option>
              <option>SYP</option>
              <option>SZL</option>
              <option>THB</option>
              <option>TJS</option>
              <option>TMT</option>
              <option>TND</option>
              <option>TOP</option>
              <option>TRY</option>
              <option>TTD</option>
              <option>TWD</option>
              <option>TZS</option>
              <option>UAH</option>
              <option>UGX</option>
              <option>USD</option>
              <option>UYU</option>
              <option>UZS</option>
              <option>VEF</option>
              <option>VES</option>
              <option>VND</option>
              <option>VUV</option>
              <option>WST</option>
              <option>XAF</option>
              <option>XAG</option>
              <option>XAU</option>
              <option>XCD</option>
              <option>XDR</option>
              <option>XOF</option>
              <option>XPF</option>
              <option>YER</option>
              <option>ZAR</option>
              <option>ZMK</option>
              <option>ZMW</option>
              <option>ZWL</option>
            </select>
          </label>
        </div>
        <div>
          <button
            onClick={e => handleClick(e)}
          >Submit</button>
        </div>
      </form>
      {conversion && <p>{conversion.result.toFixed(2)} {conversion.query.to}</p>}

    </>
  );
}

export default App;
