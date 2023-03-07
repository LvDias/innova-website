import ButtonFour from '../templates/button/buttonFour';

export default function CallToAction(){

  return(

    <section className='
      flex
      justify-center
      bg-[#0C92F2]
    '>

      <div className='
        flex flex-col
        px-5 py-7 xl:py-14
        gap-7
        items-center
        w-full max-w-screen-2xl
      '>

        <div className='
          flex flex-col
          gap-7
        '>

          <h3 className='
            text-center
            text-white
          '>
            Faça uma simulação de empréstimo, sem compromisso.
          </h3>

          <h5 className='
            text-center
            text-white
          '>
            Faça uma simulação e descubra como a Innova consegue as melhores taxas do mercado.
          </h5>
          
        </div>

        <ButtonFour 
          url='/'
          text='Fazer uma simulação, agora!'
        />

      </div>

    </section>

  )

}