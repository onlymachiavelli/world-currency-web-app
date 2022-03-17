import React, {useState, useEffect} from 'react'
import axios from 'axios'
const useConverter = (fromVal:Number, fromCode:Number, toCode:string,usDollar:Number):any =>{
    
    const [response, setResponse] = useState(0) 
    useEffect(():void=>{

    }, [response])
    return {response, setResponse}
}

export default useConverter