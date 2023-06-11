import * as React from 'react'
import axios from 'axios'

const useConverter = () =>{
    const [world, setWorld] = React.useState([])
    const [from, setFrom] :any = React.useState()
    const getWorld = async () =>{
        axios.get("https://worldapi.onrender.com/").then((res:any)=>{
            setWorld(res.data)
        }).catch(e=>{
            console.log(e)
        })
    }

    return {
        world,
        getWorld,
        setWorld
    }

}

export default useConverter