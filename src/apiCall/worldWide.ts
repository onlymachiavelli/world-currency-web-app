import axios from "axios"
import axois from "axios"

const worldDatas = async (index: any, data: any, all: boolean) => {
  const reqUrl = all
    ? `https://worldwideapi.herokuapp.com/`
    : `https://worldwideapi.herokuapp.com/${index}/${data}`
  const response = await axios.get(reqUrl).then((res: any) => {
    res.data
  })
  return response
}

export default worldDatas
