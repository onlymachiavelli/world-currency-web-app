import React from "react"
import axios from "axios"

const callCurrency = async () => {
  const APIKEY = process.env.NEXT_APIKEY

  const respone = await axios
    .get(`https://api.currencyapi.com/v3/latest?apikey=${APIKEY}`)
    .then((res) => {
      return res.data
    })
  return respone
}

export default callCurrency
