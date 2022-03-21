import React, {useState, useEffect} from 'react'

import axios from 'axios'
import callCurrency from '../apiCall/currencycall'
import callGeo from '../apiCall/location'
import worldDatas from '../apiCall/worldWide'
const useConverter = (fromIso:any, toIso:any):any =>{
    const [fromCurrency, setFrom] = useState(
        {
            code:String,
            name:String,
            currency:String
        }
    )
    const [toCurrency, setTcurrency] = useState({
            code:String,
            name:String,
            currency:String
    })
    
    const [response, setResponse] = useState(0) 
    useEffect(():void=>{
        
        worldDatas("iso2", fromIso, false).then(
            res =>{
                setFrom({
                        code:res["data"]["iso2"],
                        name:res["data"]["countryName"],
                        currency:res["data"]["currencyCode"]
                    })
            }
        )
        worldDatas("iso2", toIso, false).then(
            res =>{
                setTcurrency({
                    code:res["data"]["iso2"],
                    name:res["data"]["countryName"],
                    currency:res["data"]["currencyCode"],
                })
            }
        )
    }, [response,fromCurrency, toCurrency ])
    return {response, setResponse, setFrom, setTcurrency, fromCurrency, toCurrency}
}

export default useConverter