import ButtonTwo from '../templates/button/buttonTwo';

export default function Content(){

  return(

    <div className='
      flex flex-col xl:grid xl:grid-cols-2
      justify-between items-center
      gap-7 xl:gap-14
    '>

      <div className='
        aspect-ratio aspect-[16/9]
        w-full h-full
        bg-cover bg-center bg-[url("/assets/images/solution.webp")]
      ' />

      <div className='  
        flex flex-col
        items-start
        gap-5
      '>

        <h2>Crédito consignado para quem está negativado</h2>
        <h5 className='
          text-[#8FA6B2]
        '>Empréstimo consignado com as melhores taxas do <br />
        mercado, abatidas automaticamente do salário ou da <br />
        aposentadoria.</h5>

        <ButtonTwo
          url={process.env.WHATSAPP} 
          text='Simular empréstimo'
        />

      </div>

    </div>

  )

}