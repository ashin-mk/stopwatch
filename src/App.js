import logo from './logo.svg';
import './App.css'
import {useState} from "react"

function App() {
  const [reset,setreset]=useState(false)
  const [timer,setTimer]=useState({
    hrs:0,
    min:0,
    sec:0,
    ms:0
  })
  var updatedhrs=timer.hrs; var updatedmin=timer.min ; var updatedsec=timer.sec;var updatedms=timer.ms
  const [holder,setholder]=useState()
  
  const handleStart=()=>{
    setreset(false)
    const run=()=>{
      if(updatedmin===60){
        updatedhrs++
        updatedmin=0
      }
      if(updatedsec===60){
        updatedmin++
        updatedsec=0
      }if(updatedms===100){
        updatedsec++
        updatedms=0
      }
      updatedms++
       return setTimer({hrs:updatedhrs,min:updatedmin,sec:updatedsec,ms:updatedms})
        }
setholder(setInterval(()=>{run()},10))
  
}
const handleReset=()=>{
  setreset(false)
  setTimer({
    hrs:0,
    min:0,
    sec:0,
    ms:0
  })
}

  const handleStop=()=>{
    if(timer.hrs>0 || timer.min>0 ||timer.sec>0 ||timer.ms>0){
      setreset(true)
    }
clearInterval(holder)
  }

  // const handlePause=()=>{

  // }
  return (
    <div className="App">
      <div className="card">
        <div className='content'>
{timer.hrs<10 ? "0"+timer.hrs :timer.hrs}:{timer.min<10 ? "0"+timer.min :timer.min}:{timer.sec<10 ? "0"+timer.sec :timer.sec}:{timer.ms<10 ? "0"+timer.ms :timer.ms}
        </div>
{
  reset===true &&
  <div className='button'>
  <button onClick={handleStart}>Resume</button>
<button onClick={handleReset}>Reset</button></div>
}
{
  reset===false &&
  <div className='button'>
  <button onClick={handleStart}>Start</button>
<button onClick={handleStop}>Stop</button>
</div>

}

      </div>
     
    </div>
  );
}

export default App;
