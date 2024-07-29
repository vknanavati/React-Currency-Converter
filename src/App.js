import { useEffect, useState } from 'react';
import {InputLabel,FormControl, Select, Grid, Container, Typography, TextField, MenuItem} from '@mui/material'

console.log(process.env)

const currency_codes = [

  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTC",
  "BTN",
  "BWP",
  "BYN",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLF",
  "CNY",
  "CNH",
  "COP",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "STD",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XAG",
  "XAU",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMK",
  "ZMW",
  "ZWL",
]

function App() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("CAD");
  const [conversion, setConversion] = useState("")

  console.log("amount:", amount)
  console.log("from:", from)
  console.log("to:", to)

  // useEffect(() => {
  //   console.log("Grab initial currency conversion for ", from)

  //   const myHeaders = new Headers();
  //   myHeaders.append("apikey", process.env.REACT_APP_API_KEY);
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: myHeaders
  //   };

  //   console.log("Searching conversion:", "from", from, "to", to)
  //   fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("currency data:", data)
  //       setConversion(data)

  //     })
  //     .catch(error => console.log('error', error));

  // }, [])

  const handleClick = e => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.REACT_APP_API_KEY);
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
    <Container>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Typography
          variant="h6"
          marginTop={5}
          marginBottom={2}
        >
          Currency Conveter
        </Typography>
        <form>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
          >
            <TextField
              sx={{
                width: 100,
                "& .MuiInputBase-root":{
                  height: 30
                }
              }}
              value={amount}
              type="text"
              onChange={e => setAmount(e.target.value)}
            />
            <Grid
              container
              marginTop={2}
              marginBottom={3}
            >
                <Grid item
                  margin={2}
                  padding={2}
                >
                  <FormControl sx={{width: 100}}>
                  <InputLabel>From</InputLabel>
                    <Select
                      onChange={e => setFrom(e.target.value)}
                    >
                      {currency_codes.map((currency_code, i) => {
                         return <MenuItem key={i} value={currency_code}>{currency_code}</MenuItem>
                      })}
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item
                  margin={2}
                  padding={2}
                >
                  <FormControl sx={{width: 100}}>
                    <InputLabel
                    >To
                    </InputLabel>
                      <Select
                        onChange={e => setTo(e.target.value)}
                      >
                        {currency_codes.map((currency_code, i) => {
                          return <MenuItem key={i} value={currency_code}>{currency_code}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <div>
              <button
                onClick={e => handleClick(e)}
              >Submit</button>
            </div>
          </Grid>
        </form>
      </Grid>
    </Container>
      {conversion && <p>{amount} {conversion.query.from} = {conversion.result.toFixed(2)} {conversion.query.to}</p>}

    </>
  );
}

export default App;
