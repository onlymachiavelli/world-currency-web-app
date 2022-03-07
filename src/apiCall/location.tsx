import React from 'react'
import axios from 'axios'
const callGeo = async( ) =>{
    const response = await axios.get(`https://api.db-ip.com/v2/free/self`)
    .then( res => res.data)
    return response
}

export default callGeo