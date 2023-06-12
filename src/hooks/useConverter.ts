import * as React from 'react'
import axios from 'axios'
import CurrencyApi from '@everapi/currencyapi-js'
import "dotenv/config"
const useConverter = () =>{
    const [world, setWorld] = React.useState([])
    const [from, setFrom] :any = React.useState()
    const [to, setTo] : any= React.useState()
    const [fromVal, setFval] :any = React.useState(1)
    const [toVal, setTval] :any=  React.useState(0)
    const [select,  setSel]:any = React.useState()
    const [currencies, setCu] :any = React.useState()
    const getWorld = async () =>{
        axios.get("https://worldapi.onrender.com/").then((res:any)=>{
            setWorld(res.data)
        }).catch(e=>{
            console.log(e)
        })
    }



    const getCountry = async (iso: any, target : Number) =>{
        axios.get(`https://worldapi.onrender.com/by?field=iso1&target=${iso}`)
        .then((res:any) =>{

            if (res) {
                if(target === 1 && res){
                    setFrom(res.data)
                }else{
                    setTo(res.data)
                }
            }
        })
        .catch(e=>{
            console.log(e)
        }
    
        )
    }

    const getCurrent = async () =>{
        axios.get("https://api.db-ip.com/v2/free/self").then((res:any) =>{
            

            if (res) {
                getCountry(res.data.countryCode, 1)
                getCountry("us", 2)
            }

        })
        .catch(e=>{
            console.log(e)
        })
    }


    const getAllCurrencies = async () =>{
        axios.get("https://api.currencyapi.com/v3/latest?apikey=f9AzIssqFw3Bz5QQxHeVOCa2JiCdaJIYBkpqIHmY").then(res=>{
            if (res) setCu(res.data)
        })
        .catch(e=>{
            console.log("error ! ")
        })
    }



    const Calculate = async () =>{
        //get the value of from 
        //console.log("The currencies are : ", currencies.data.USD)



    if (currencies){
        const f : any = currencies.data[from[0].currency_code]
        const t : any = currencies.data[to[0].currency_code]
        console.log( "The f is : ", from)
        //let res : any = (t.value / f.value) * fromVal
        //setTval(res)
    }
    }

    return {
        world,
        getWorld,
        setWorld, 
        getCurrent,
        from,
        getCountry, 
        to,
        setFrom, 
        setTo,

        fromVal,
        setFval,
        toVal,
        setTval , 

        getAllCurrencies,
        select, 
        setSel,
        currencies,
        setCu, 
        Calculate
    }

}

export default useConverter