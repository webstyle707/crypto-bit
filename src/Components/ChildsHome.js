import React from 'react'

const ChildsHome = () => {
  return (
    <div className='bg1 bg-cover bg-center object-center bg-no-repeat text-white relative'>
      <div className=' absolute w-full h-full bg-gray-800 bg-opacity-60'></div>
      <div className=' flex items-center z-10 sticky py-32'>
        <div className=' space-y-3 md:space-y-6 pl-4 pr-4 md:pr-0 md:pl-10 md:w-7/12 lg:w-6/12 xl:w-5/12'>
          <h1 className='font-semibold lg:text-4xl md:text-3xl text-xl text-gray-50'>Cryptocurrency – meaning and definition</h1>
          <p className='lg:text-lg md:text-base text-sm'>
              Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChildsHome