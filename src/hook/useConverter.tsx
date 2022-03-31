import React, { useEffect, useState } from "react"
import { isConstructorDeclaration } from "typescript"
import callCurrency, { testCurrency } from "../apiCall/currencycall"
const useConverter = () => {
  const [response, setRes] = useState(0)
  const [datas, setDatas] = useState({})

  useEffect(() => {
    ;(async () => {
      const response: any = await callCurrency()
      if (response) {
        setDatas(response)
      }
    })()
  }, [])
  const convert = (from: any, to: any) => {
    console.log(from)
  }
  return { response, setRes, datas, convert }
}

export default useConverter
