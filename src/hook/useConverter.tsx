import React, { useEffect, useState } from "react"
import { isConstructorDeclaration } from "typescript"
import callCurrency, { testCurrency } from "../apiCall/currencycall"
const useConverter = () => {
  const [response, setRes] = useState(1)
  const [datas, setDatas]: any = useState()

  useEffect(() => {
    ;(async () => {
      const res: any = await testCurrency()
      if (res) {
        setDatas(res)
      }
    })()
  }, [datas])

  const convert = (from: any, to: any, datas: any) => {
    if (datas && response) {
      const fromUSD: any = from.fromCurrency
      const fromV: any = datas["data"][fromUSD]["value"]
      const toV: any = datas["data"][to]
      console.log(datas["data"][to])
      const res = Number((fromV * from.inValue) / toV)
      setRes(res)
      console.log(response)
    }
  }
  return { response, setRes, datas, convert }
}

export default useConverter
