import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [dataApi, setDataApi] = useState()
  const [dolar, setDolar] = useState(0)
  const [dolarDia, setDolarDia] = useState(dataApi)


  const url = 'http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'
  axios.get(url)
    .then(response => {
      setDataApi(response.data.USDBRL.ask)
    })

  const capturaValor = (evt) => {
    setDolar(evt.target.value)
    console.log(evt)
  }

  useEffect(() => {
    setDolarDia(dataApi * dolar)
    console.log(dolarDia)
  }, [dataApi, dolar, dolarDia])





  return (
    <div className=' w-full h-screen flex justify-center items-center  bg-[#191970] text-gray-300 border-[#DAA520]'>

      <div className='w-[800px] h-[200px]'>

        <form action="" className='flex justify-center items-center w-full h-full text-4xl'>

          <div className='w-full'>

            <div className='flex pb-3 justify-start items-center w-full border-4 border-red-900'>
              <span className='text-white font-bold mr-2'>R$</span>
              <input type="number" className='font-bold rounded-md text-[#DAA520] w-[140px] bg-transparent ' value={dataApi} />
              <span className='text-white font-bold'>Cotação do dia</span>
            </div>

            <div className='flex pb-3 justify-center items-center'>

              <div className='flex justify-start items-start border-4 border-red-400 w-full'>
                <span className='text-white mr-2 font-bold'>U$</span>
                <input type="number" className='mr-2 rounded-md text-black w-[140px] font-bold' value={dolar} onChange={capturaValor} />
                <span className='text-white font-bold'>Dólar americano</span>
              </div>


            </div>
            <div className='flex pb-5 justify-start items-center border-4 border-red-700'>
              <span className='text-white font-bold'>Conversão dólar para real - R$</span>
              <div className='text-[#DAA520] font-bold'>{dolarDia}</div>
            </div>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Home