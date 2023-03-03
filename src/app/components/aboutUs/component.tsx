import Image from 'next/image';

export default function AboutUs(){

  return(

    <section className='
      flex
      justify-center
      bg-[#002540]
    '>

      <div className='
        flex flex-col
        px-5 py-14
        gap-7
        items-center
      '>

        <Image src='/assets/images/icon-innova.png' width={246} height={246} alt='Ícone Innova' />

        <h2 className='
          text-center text-white
        '>Sobre nós</h2>

        <h5 className='
          text-center
          text-[#8FA6B2]
        '>
          Somos uma empresa de Soluções Financeiras, homologada pelo Banco Central do Brasil,<br />
          como Correspondente Bancário, e autorizados, por outros órgãos públicos (INSS, Governos<br />
          Federal, Estadual e Municipal) para transação de linhas de crédito, por eles oferecidas.
        </h5>

        <h5 className='
          text-center
          text-[#8FA6B2]
        '>
          <b className='text-white'>Por que escolhemos os órgãos públicos?<br /></b>
          É simples: porque possuem, de longe, as melhores opções de crédito.
        </h5>

      </div>

    </section>

  )

}