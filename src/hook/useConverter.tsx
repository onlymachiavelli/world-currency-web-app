import React, {useState, useEffect} from 'react'
import axios from 'axios'
const useConverter = (fronC:any, toC:any):any =>{
    const [response, setResponse] = useState(0) 
    useEffect(():void=>{

    }, [response])
    return {response, setResponse}
}

export default useConverter