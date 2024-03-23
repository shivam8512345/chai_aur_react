import { useState, useCallback, useEffect, useRef } from 'react'

import "./App.css"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook.
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstudvwxyz";

    if (numberAllowed) str += "0123456789";
    if (CharAllowed) str += "!@#$%^&*_+{}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);


  }, [length, numberAllowed, CharAllowed, setPassword]);

  const CopyPasswordToclipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, CharAllowed, setPassword]);


  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white text-center my-4'>Password generator</h1>
        <div className='flex shadow rounded-lg  overflow-hidden mb-4'>
          <input type='text'
            className='outline-none w-full py-2 px-3'
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
          /> <button
            onClick={CopyPasswordToclipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 copy-btn'>copy</button>
        </div>
        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <input type='range'
              min={6}
              max={30}
              value={length}
              className='cursor-pointer '
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {`(${length})`}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              className='w-[20px] h-[20px]'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type='checkbox'
              defaultChecked={CharAllowed}
              id='CharInput'
              className='w-[20px] h-[20px]'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='CharInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
