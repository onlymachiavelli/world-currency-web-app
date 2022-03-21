import React from "react"
import axios from "axios"

const worldDatas = async(index:string, data:string, all:boolean)=> {
  const reqURL = all ? "https://worldwideapi.herokuapp.com/country/morocco" : `https://worldwideapi.herokuapp.com/${index}/${data}`
  const response = await axios.get(reqURL).then(
   res => res.data
  )
  return response
}

export default worldDatas
