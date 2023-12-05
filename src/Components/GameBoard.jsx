'use client'

import Clock from "@/Components/Clock";
import { connectToDb } from "@/utils/db";
import { useEffect, useState } from "react";


export default function GameBoard() {
  const [betData,setBetData] =useState({
    color:'',
    amount:'10'
  })
  const [message,setMessage]= useState('')
  const colors =["red","green","yellow","blue"]
  const [alert,setAlert] = useState(false)
  const handleClick = (e)=>{  
    const btn = document.querySelectorAll('.color-btn');
    btn.forEach((element)=>{
      element.classList.remove('border-4')
      element.classList.remove('shadow-sm')
    })
    e.target.classList.add('border-4')
    e.target.classList.add('shadow-sm')
  }
  const changeBet = (e)=>{
    setBetData({...betData, amount: e.target.value})
    if(!e.target.value || e.target.value<10)
    { 
      console.log(process.env.MONGODB_URI)
      setMessage('Amount must be 10')
      setAlert(true)
    }
    else 
      setAlert(false)
    if(e.target.value>500){
      setMessage('Amount must in 500')
      setAlert(true)
      setBetData({...betData,amount:500})
    }
  }

  return (
    <div className="h-96 w-screen p-12">
      <h1 className="text-5xl ms-5 text-gray-300">Try your luck</h1>
      <div className="m-5 rounded-xl shadow-slate-900 shadow-lg bg-gradient-to-r from-purple-900 to-purple-950 flex  p-8">
        <div>
          <p className="ms-2 mb-2">Result Will Declare In:</p>
          <div className="border border-slate-800 p-4  rounded-xl bg-gradient-to-r from-violet-900 to-violet-950">
            <Clock/>
          </div>
        </div>
        <div className="ms-10">
          <p className="ms-2 mb-2">Choose your color</p>
          <div className="flex">
              <div className={`mx-2 w-20 h-20 mt-2 color-btn shadow-slate-300 cursor-pointer rounded-lg bg-red-500`} onClick={handleClick}></div>
              <div className={`mx-2 w-20 h-20 mt-2 color-btn shadow-slate-300 cursor-pointer rounded-lg bg-green-500`} onClick={handleClick}></div>
              <div className={`mx-2 w-20 h-20 mt-2 color-btn shadow-slate-300 cursor-pointer rounded-lg bg-yellow-500`} onClick={handleClick}></div>
              <div className={`mx-2 w-20 h-20 mt-2 color-btn shadow-slate-300 cursor-pointer rounded-lg bg-blue-500`} onClick={handleClick}></div>
          </div>
        </div>
        <div className="ms-10">
          <p className="ms-2 mb-2">Choose your bet</p>
          <div className={`mt-4 rounded-lg text-center text-5xl ms-2 bg-gradient-to-r from-violet-900 to-violet-950 border-2 p-4 ${alert ? 'border-red-500': 'border-white'}`}>
            <span>&#x20B9;</span>
            <input type="text" placeholder="" value={betData.amount} onChange={changeBet} className="focus:outline-0 font-semibold bg-transparent w-24 h-14 "/> 
          </div>
          <p className="mt-2 ms-4 text-red-400">{alert ? message:''}</p>
        </div>
      </div>
    </div>
  )
}
