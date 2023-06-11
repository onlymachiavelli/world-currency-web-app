import * as React from 'react'
import axios from 'axios'

const useConverter = () =>{
    const [world, setWorld] = React.useState([])
    const [from, setFrom] :any = React.useState()
    const [to, setTo] : any= React.useState()
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
            setFrom(res.data)
        })
        .catch(e=>{
            console.log(e)
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
        setTo
    }

}

export default useConverter