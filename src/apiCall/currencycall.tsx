import React from "react"
import axios from "axios"

const callCurrency = async () => {
  const APIKEY = [process.env.NEXT_APIKEY, "226fc6f0-2f89-11ec-b037-65bce9d6ed5a"]

  const respone = await axios
    .get(`https://api.currencyapi.com/v3/latest?apikey=${APIKEY[1]}`)
    .then((res) => {
      return res.data
    })
  return respone
}

export default callCurrency
