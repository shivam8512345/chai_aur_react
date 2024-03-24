import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div className="w-full h-screen  bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`
      }}>
      <div className="w-full flex pt-10 max-w-[1150px] m-auto justify-between">
        <div className="w-[500px] flex items-center justify-center">
          <img className='w-full mt-10' src='../src/assets/3d-hygge-man-in-vr-headset-looking-at-astronaut.png' />
        </div>

        <div className="w-full max-w-md h-[300px] mt-20 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency)
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-[10px] -mt-3">
              <button
                type='button'
                className='absolute left-1/2 
               -translate-x-1/2
               translate-y-1/5
               border-2
               border-white rounded-md
               bg-blue-600 text-white px-2
               py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) =>
                  setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div >
    </div >
  )
}

export default App
