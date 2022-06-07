import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [dataApi, setDataApi] = useState()
  const [dolar, setDolar] = useState(0)
  const [dolarDia, setDolarDia] = useState(dataApi)


  const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'
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

      <div className='w-[600px] h-[200px]'>

        <form action="" className='flex justify-center items-center w-full h-full sm:text-3xl md:text-4xl lg:text-4xl'>

          <div className='w-full border-t-4 border-b-4 border-[#DAA520] '>

            <div className='pb-3 justify-center items-center w-full'>

              <div className=''>
                <span className='text-white font-bold'>Cotação do dia</span>
              </div>

              <div>
                <span className='text-white font-bold mr-2'>R$</span>
                <input type="number" className='font-bold rounded-md text-[#DAA520] w-[220px] bg-transparent ' value={Number(dataApi).toFixed(2)} />
              </div>

            </div>



            <div className='justify-start items-center w-full pb-3 '>
              <div>
                <span className='text-white font-bold'>Digite o valor em dólar americano</span>
              </div>
              <div>
                <span className='text-white mr-2 font-bold'>US$</span>
                <input type="number" className='mr-2 rounded-md text-black w-[220px] font-bold' value={dolar} onChange={capturaValor} />
              </div>

            </div>


            <div className='pb-5 justify-center items-center'>
              <div>
                <span className='text-white font-bold'>Conversão dólar para real</span>
              </div>
              <div className='flex'>
                <span className='text-white mr-2 font-bold'>R$</span>
                <div className='text-[#DAA520] font-bold'>{Number(dolarDia).toFixed(2)}</div>
              </div>
            </div>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Home