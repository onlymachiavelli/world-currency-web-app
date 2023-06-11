import * as React from 'react'
import Head from 'next/head'
import Navbar from '../src/components/navbar'
import Block from '../src/components/Card'
const App = () =>{


  const [menu, setMenu] = React.useState("hidden")
  return (


    <main className="w-full h-screen flex  items-between justify-center flex-col flex-wrap">
      <Head>
        <title>Currency Converter App</title>
      </Head>
      <Navbar Menu={menu} onSet={setMenu}/>

      <p className="block w-full text-center text-blue font-bold text-xl " >You're GAY</p>
      <p className="block w-full text-center text-white font-bold text-xl ">Convert World Wide Currencies and CryptoCurrencies</p>
    
      <div className="w-11/12 h-auto p-10 bg-blue2 m-auto flex items-center justify-center rounded-2xl gap-4 ">
        <Block/>
        <Block/>
      </div>


      <button className="h-14 rounded w-60 text-white m-auto bg-green">Convert</button>
    </main>
  )
}

export default App