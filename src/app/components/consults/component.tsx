import ButtonThree from '../button/buttonThree';

export default function Consults(){

  return(

    <div className='
      flex
      justify-center
      bg-[#F8F8F8]
    '>

      <div className='
        grid grid-cols-2
        justify-between
        gap-14
        px-5 py-14
        w-full max-w-screen-2xl
      '>

        <div className='
          aspect-video
          bg-[url("/assets/images/consults.webp")] bg-center bg-cover
        ' />

        <div className='
          flex flex-col
          gap-5
          justify-center
        '>

          <h3>Nossos consultores financeiros</h3>

          <h5 className='
            text-[#8FA6B2]
          '>
            Estamos prontos para encontrar a melhor opção de <br /> 
            crédito e ajudar você a ter saúde financeira.
          </h5>

          <div className='
            flex
            gap-5
          '>
            
            <ButtonThree 
              url='/'
              text='Conheça o time completo'
            />

            <ButtonThree 
              url='/'
              text='Trabalhe conosco'
            />

          </div>

        </div>

      </div>

    </div>

  )

}