import React, { useEffect, useState } from "react"
import { isConstructorDeclaration } from "typescript"
import callCurrency, { testCurrency } from "../apiCall/currencycall"

const getDatas = () => {
  const [datas, setD] = useState()

  useEffect(() => {
    /*
    callCurrency().then((res: any) => {
      if (res) {
        setD(res.data)
      }
    })
    */

    ;(async () => {
      const res: any = testCurrency()
      if (res) {
        setD(res)
      }
    })()
  }, [])
  return datas
}

const useConverter = () => {
  const datas: any = getDatas()
  const [response, setRes] = useState(0)
  const [usd, setUsd] = useState({})
  useEffect(() => {
    ;(async () => {})()
  }, [])
  const convert = (fromC: any, toC: any) => {
    console.log(datas)
  }
  return { datas, convert, response }
}

export default useConverter
