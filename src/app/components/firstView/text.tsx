import Image from 'next/image'
import ButtonTwo from '../templates/button/buttonTwo'

export default function Text(){

  return(

    <div className='
      flex flex-col
      items-center
      gap-7
    '>

      <h1 className='
        text-center
      '>Empréstimo consignado com as menores taxas do mercado</h1>

      <h4 className='
        text-center
      '>Somos a ponte que liga você aos seus objetivos financeiros por meio do crédito consignado.</h4>

      <ButtonTwo 
        url={process.env.WHATSAPP} 
        text='Quero fazer uma simulação'
      />

      <Image src='/assets/images/arrow-down.svg' width={75} height={75} alt='Arrow Down' />

    </div>

  )

}