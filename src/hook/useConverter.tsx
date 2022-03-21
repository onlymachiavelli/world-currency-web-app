import React, { useState, useEffect } from "react"

import axios from "axios"
import callCurrency from "../apiCall/currencycall"
import callGeo from "../apiCall/location"
import worldDatas from "../apiCall/worldWide"
const useConverter = (toIso: any): any => {
  const [fromIso, setFIso] = useState()

  const [fromCurrency, setFrom] = useState({
    code: "",
    name: "",
    currency: "",
  })
  const [toCurrency, setTcurrency] = useState({
    code: "",
    name: "",
    currency: "",
  })

  const [response, setResponse] = useState(0)
  useEffect(() => {
    ;(async () => {
      const callGeoRes = await callGeo()
      if (callGeoRes) setFIso(callGeoRes["countryCode"])
      if (fromIso) {
        const res = await worldDatas("iso2", fromIso, false)
        if (res["data"]) {
          setFrom({
            code: res["data"]["iso2"],
            name: res["data"]["countryName"],
            currency: res["data"]["currencyCode"],
          })
        }
      }

      const worldDatasRes = await worldDatas("iso2", toIso, false)
      if (worldDatasRes["data"]) {
        setTcurrency({
          code: worldDatasRes["data"]["iso2"].toLowerCase(),
          name: worldDatasRes["data"]["countryName"],
          currency: worldDatasRes["data"]["currencyCode"],
        })
      }
    })()
  }, [fromIso, toIso])
  return {
    response,
    setResponse,
    setFrom,
    setTcurrency,
    fromCurrency,
    toCurrency,
  }
}

export default useConverter