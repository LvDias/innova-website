import ButtonTwo from '../button/buttonTwo';

export default function Education(){

  return(

    <section className='
      flex
      justify-center
      bg-black
    '>

      <div className='
        flex flex-col xl:grid xl:grid-cols-2
        justify-between
        gap-7 xl:gap-14
        px-5 py-7 xl:py-14
        w-full max-w-screen-2xl
      '>

        <div className='
          aspect-square
          bg-[url("/assets/images/education.webp")] bg-center bg-contain bg-no-repeat
        ' />

        <div className='
          flex flex-col
          gap-5
          items-center xl:items-start justify-between
        '>

          <h2 className='
            text-white
          '>Educação financeira</h2>

          <h5>
            Aprenda a controlar o seu dinheiro por meio de nosso <br /> 
            programa de mentoria online, exclusivo para clientes <br /> 
            Innova.
          </h5>

          <h5>
            Com a Innova você encontra o melhor crédito para <br /> 
            reorganizar sua vida financeira, e principalmente, para<br /> 
            alcançar objetivos financeiros de curto, médio e longo<br /> 
            prazo. 
          </h5>

          <h5>
            Em nosso programa de mentoria online, você<br /> 
            desenvolve a mentalidade correta para lidar com o<br /> 
            dinheiro, livrando-se das dívidas e criando<br /> 
            oportunidades de aumentar os seus ganhos de forma<br /> 
            simples e objetiva.
          </h5>

          <h5>
            {`>`} Transmitido pelo Google Meet! <br /> 
            {`>`} Benefício exclusivo para clientes Innova!
          </h5>

          <h5>
            Sem nenhum custo adicional, você participa de nosso<br /> 
            programa de mentoria uma vez por semana do seu<br /> 
            computador ou smartphone e adquire o conhecimento<br /> 
            necessário para controlar suas finanças.
          </h5>

          <ButtonTwo
            url='https://api.whatsapp.com/send/?phone=5514998343492&text=Oi,+L%C3%A9o.+Quero+participar+da+masterclass+do+Prof.+Matrone!&type=phone_number&app_absent=0'
            text='Consultar pelo Whatsapp'
          />

        </div>

      </div>

    </section>

  )

}