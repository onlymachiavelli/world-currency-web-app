import * as React from 'react'
import axios from 'axios'
import CurrencyApi from '@everapi/currencyapi-js'
import "dotenv/config"
const useConverter = () =>{
    const key : any = process.env.API_KEY || "f9AzIssqFw3Bz5QQxHeVOCa2JiCdaJIYBkpqIHmY"
    console.log("key is : ", key)
    const CURRENCY = new CurrencyApi(key )
    const [world, setWorld] = React.useState([])
    const [from, setFrom] :any = React.useState()
    const [to, setTo] : any= React.useState()
    const [fromVal, setFval] = React.useState(1)
    const [toVal, setTval] = React.useState(0)
    const [select,  setSel] = React.useState()
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

            if(target === 1){
                setFrom(res.data)
            }else{
                setTo(res.data)
            }
        })
        .catch(e=>{
            console.log(e)
        }
    
        )
    }

    const getCurrent = async () =>{
        axios.get("https://api.db-ip.com/v2/free/self").then((res:any) =>{
            

            getCountry(res.data.countryCode, 1)
            getCountry("us", 2)

        })
        .catch(e=>{
            console.log(e)
        })
    }


    const Test = async () =>{
        CURRENCY.latest(
{
    base_currency:"usd", 
    target_currency:"tnd"
}            
        ).then(res=>{
            console.log("c is : ", res)
        }).catch(e=>{
            console.log("error ! " , e)
        })
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

        Test,


        select, 
        setSel
    }

}

export default useConverter