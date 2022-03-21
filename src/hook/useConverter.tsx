import React, {useState, useEffect} from 'react'

import axios from 'axios'
import callCurrency from '../apiCall/currencycall'
import callGeo from '../apiCall/location'
import worldDatas from '../apiCall/worldWide'
const useConverter = ():any =>{
    const [exchange, setEx] = useState({
        //SCHEMA
        from:{
            code:"",
            name:"",
            currency:""
        },
        to:{
            code:"US",
            name:"United States Of America",
            currency:"USD"
        }
    })
    const [response, setResponse] = useState(0) 
    useEffect(():void=>{
        callGeo().then(
            res =>{
                setEx({
                    from:{
                        code:exchange.from.code,
                        name:res["countryName"],
                        currency:exchange.from.currency

                    },
                    to:exchange.to
                })
                console.log(res)
            }
        )
        worldDatas("country", exchange.from.name, false).then(
            res =>{
                setEx(
                    {
                        from:{
                            code:res["data"]["iso2"],
                            name:exchange.from.name,
                            currency:res["data"]["currencyCode"]
                        },
                        to:exchange.to
                    }
                )
            }
        )
    }, [])
    return {response, setResponse, exchange, setEx}
}

export default useConverter