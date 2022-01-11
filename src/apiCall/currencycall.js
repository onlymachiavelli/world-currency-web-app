import React from "react"
import axios from "axios"

const callCurrency = async () => {
  const APIKEY = "6a0d42ec238114b8ecce5cff1c7aa96a"

  const respone = await axios
    .get(`http://api.currencylayer.com/live?access_key=${APIKEY}`)
    .then((res) => {
      res.data
    })
  return respone
}

export default callCurrency
