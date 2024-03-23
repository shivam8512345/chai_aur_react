import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{
          backgroundColor: color,
        }}
      >

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-4 py-3 rounded-2xl'>
            <button
              key={12}
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "green",
              }}>Green</button>
            <button
              key={13}
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "red",
              }}>Red</button>
            <button
              key={45}
              onClick={() => setColor("Yellow")}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{
                backgroundColor: "yellow",
              }}>Yellow</button>
            <button
              key={56}
              onClick={() => setColor("Orange")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "Orange",
              }}>Orange</button>
            <button
              key={67}
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "blue",
              }}>Blue</button>
            <button
              key={89}
              onClick={() => setColor("grey")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "grey",
              }}>Grey</button>
            <button
              key={90}
              onClick={() => setColor("skyblue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "skyblue",
              }}>skyblue</button>
            <button
              key={7494}
              onClick={() => setColor("purple")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "purple",
              }}>Purple</button>
            <button
              key={7494}
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{
                backgroundColor: "black",
              }}>Black</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
