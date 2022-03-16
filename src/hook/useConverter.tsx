import React, {useState, useEffect} from 'react'

const useConverter = (fronC:any, toC:any):any =>{
    const [response, setResponse] = useState(0) 
    useEffect(():void=>{

    }, [response])
    return {response, setResponse}
}