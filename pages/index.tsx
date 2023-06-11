import * as React from 'react'
import Head from 'next/head'
import Navbar from '../src/components/navbar'
import Block from '../src/components/Card'
import useConverter from '../src/hooks/useConverter'

const App = () =>{
  const {world,getWorld,setWorld, getCurrent, from, getCountry, to, Test, select, setSel} = useConverter()
  const [list, setList] = React.useState("hidden")
  const [menu, setMenu] = React.useState("hidden")



  React.useEffect(()=>{
    getWorld()
    getCurrent()  
    //Test()
    
  }, [])




  return (


    <main className="w-full h-screen flex  items-between justify-center flex-col flex-wrap">
      <Head>
        <title>Currency Converter App</title>
      </Head>
      <Navbar Menu={menu} onSet={setMenu}/>

      <p className="block w-full text-center text-blue font-bold text-xl " >You're GAY</p>
      <p className="block w-full text-center text-white font-bold text-xl ">Convert World Wide Currencies and CryptoCurrencies</p>
    
      <div className="w-11/12 h-auto p-10 bg-blue2 m-auto flex items-center justify-center rounded-2xl gap-4 ">
        <Block 
        
        World={setList}
        Datas={from}
        Select={{
          vl : 1, 
          func : setSel
        }}
        
        
        />
        <Block World={setList} 
          Datas={to}
          Select={{
            vl : 2,
            func : setSel
          }}
        />
      </div>


      <button className="h-14 rounded w-60 text-white m-auto bg-green">Convert</button>
      

      <div className={`fixed w-full h-full bg-[#000000a8] top-0 left-0 ${list} items-center justify-center`}>

          <div className="w-2/3 h-2/3 overflow-auto bg-[#f0f0f0] rounded pb-5 shadow-lg">
            <div className="w-full h-7 sticky top-0 bg-bg-[#f0f0f0] flex items-center justify-end pr-2 pt-2">
              <button className="text-xl"
              onClick={()=>{
                setList("hidden")
              }
            }
              >x</button>
            </div>
            <p className="text-center text-xl">All Countries</p>

            {

              world.map((item:any, index:any)=>{

                return (
                  <button className="block bg-[#f0efef] w-full mt-2  "
                    onClick={()=>{


                        getCountry(item.iso1, select)
                        setList("hidden")
                    }} 
                  
                  >
                    <div key={index} className="w-full h-auto flex items-center justify-between gap-4 py-2 border-b hover:bg-[#cfcfcf] duration-500">
                    <div className="flex items-center gap-4">&nbsp;
                      <div className="w-12 h-12 rounded-full bg-cover no-repeat border-2 border-[#f79423]" style={{
                          backgroundImage: `url('https://flagcdn.com/w80/${item.iso1.toLowerCase()}.png')`,
                          
                      }}></div>
                      <p className="text-[#505050] font-bold">
                          {item.name}
                      </p>
                    </div>
                    <p className="text-white font-bold">
                      {item.code}
                    </p>
                  </div>
                  </button>
                )
              }
              )
            }
          </div>
      </div>
    </main>
  )
}

export default App