import React,{ useEffect, useState } from "react"
import { isConstructorDeclaration } from "typescript"
import callCurrency from "../apiCall/currencycall"


const getDatas =() =>{
  const [datas, setD] = useState()
   
  useEffect(()=>{
    callCurrency().then((res:any) =>{
      if (res){
        setD(res.data)
      }
    })
  },[])
  return datas
}

const  useConverter = () =>{
  const datas:any = getDatas()
  const [response, setRes] = useState(0)
  const [usd, setUsd] = useState({})
  const convert = (fromC:any, toC:any) =>{
    console.log(datas)
      
  }
  return {datas,convert ,response}
}


export default useConverter