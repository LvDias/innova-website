import ButtonTwo from '../button/buttonTwo';

export default function Content(){

  return(

    <div className='
      grid grid-cols-2
      justify-between items-center
      gap-14
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
          url='https://api.whatsapp.com/send/?phone=5514998343492&text=Oi,+L%C3%A9o.+Quero+participar+da+masterclass+do+Prof.+Matrone!&type=phone_number&app_absent=0'
          text='Simular empréstimo'
        />

      </div>

    </div>

  )

}