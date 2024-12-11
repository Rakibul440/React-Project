import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import BackgroundImage from './assets/BackgroundImage.jpg'

function App() {
  
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convartedAmmount,setConvartedAmmount] = useState(0)

  const currencyINFO = useCurrencyInfo(from)

  const options = Object.keys(currencyINFO)
  
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convartedAmmount)
    setConvartedAmmount(amount)
  }

  const convert = ()=>{
    setConvartedAmmount(amount * currencyINFO[to])
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
            <h1 className='text-center text-4xl text-blue-50 font-bold pb-5'>Currency Converter</h1>
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount)=>setAmount(amount)}
                              
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                              label="To"
                              amount={convartedAmmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default App