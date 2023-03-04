import Image from 'next/image';

export default function Banks(){

  return(

    <section className='
      flex
      justify-center
    '>

      <div className='
        flex flex-col
        items-center
        gap-7
        px-5 py-7 xl:py-14
        w-full max-w-screen-2xl
      '>

        <h2 className='
          text-center
        '>Somos parceiros dos principais bancos</h2>

        <h5 className='
          text-center
        '>
          Nossos consultores estão sempre prontos para te entregar o que há de melhor!
        </h5>

        <h5 className='
          text-center
        '>
          Nós contamos as melhores taxas dos bancos: Itaú, Bradesco, BMG, Pan, C6 Bank, Safra, <br />
          Daycoval, Banco do Brasil, Caixa Econômica Federal ou outro de sua preferência.
        </h5>

        <h5 className='
          text-center
        '>
          Com mais de <b>23.000 transações realizadas (todas bem sucedidas)</b>, já atendemos mais<br />
          de <b>25.000 clientes</b>, levando melhores créditos e soluções financeiras definitivas.
        </h5>

        <div className='
          flex flex-col xl:flex-row
          gap-5
          items-center
        '>

          <Image src='/assets/images/banks/safra.png' width={131} height={40} alt='Banco Safra' /> 
          <Image src='/assets/images/banks/itau.png' width={50} height={51} alt='Banco Itau' />  
          <Image src='/assets/images/banks/c6.png' width={137} height={29} alt='Banco C6' />  
          <Image src='/assets/images/banks/bmg.png' width={108} height={45} alt='Banco BMG' />  
          <Image src='/assets/images/banks/bradesco.png' width={153} height={34} alt='Banco Bradesco' />
          <Image src='/assets/images/banks/caixa.png' width={125} height={42} alt='Banco Caixa' />    
          <Image src='/assets/images/banks/banco-brasil.png' width={94} height={53} alt='Banco Banco do Brasil' />  
          <Image src='/assets/images/banks/daycoval.png' width={94} height={53} alt='Banco Daycoval' />  
          <Image src='/assets/images/banks/pan.png' width={101} height={48} alt='Banco Pan' />  

        </div>          

      </div>

    </section>

  )

}