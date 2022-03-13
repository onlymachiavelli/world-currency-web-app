import React, {useState, useEffect} from 'react' 
import callCurrency from '../src/apiCall/currencycall'

const Home = () =>{
  const [datas, setDatas] = useState({})
  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(0)

  useEffect(()=>{
      callCurrency().then((response)=>{
        setDatas(response)
      })
  }, [])
  console.log(datas)
  return (
    <div>
      <input type={"text"}  value={from} onChange={(e)=>{e.target.value}} />
      <br/><br/>  
      <input type={"text"} value={to}  onChange={(e)=>{e.target.value}} />

      <button type="button" onClick={()=>{
      }}>Transfer</button> 
    </div>
  )
}

export default Home