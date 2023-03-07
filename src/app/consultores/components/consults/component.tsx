import Link from 'next/link'
import Content from './content'

export default function Component(){

  return(

    <div className='
      relative
      flex
      justify-center
      pt-[164px]
      bg-white
    '>

      <div className='
        absolute
        top-0
        w-full h-[176px] xl:h-[220px]
        bg-cover bg-center bg-[url("/assets/images/first-view.svg")]
      ' />

      <div className='
        flex flex-col
        px-5 py-14 xl:py-28
        gap-7 xl:gap-14
        max-w-screen-2xl
        items-center
      '>

        <div className='
          flex flex-col
          gap-7
        '>

          <h1 className='
            text-[#23323B]
            text-shadow-none
          '>Conheça nosso time de especialistas</h1>

          <h4 className='
            text-center
          '>
            Estes são os profissionais que ajudarão você a conseguir o seu crédito consignado com <br />
            a melhor taxa do mercado.
          </h4>

        </div>

        <div className='
          grid grid-cols-4
          gap-5
        '>

          <Content
            photo='https://scontent.fmii1-1.fna.fbcdn.net/v/t1.6435-9/130606663_139642551245853_3168644160501899864_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X-q1MRoE7BgAX-tq7q2&_nc_ht=scontent.fmii1-1.fna&oh=00_AfA9gyB2WcNuKbqiDoiLCYP1T07uGOlrLAPXHJYHfm2wEw&oe=642CB96D'
            office='Gestor de Marketing'
            name='Leo Ferreira'
            text='Minha missão é elaborar e executar estratégias de marketing para conquistar a confiança das pessoas. Muito mais do que vendas, eu e minha equipe estamos empenhados em nutrir relacionamento e conquistar confiança de nossos clientes e parceiros.'
          />

          <Content
            photo='https://scontent.fmii1-1.fna.fbcdn.net/v/t39.30808-6/322010786_1370720147022997_6184420096510968339_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=StW6ax3LM-EAX_eWa76&_nc_ht=scontent.fmii1-1.fna&oh=00_AfAQkHNgeJpcbNIujiRSsF6K9W1K5ZdL5M3_ozfzU2xNww&oe=640A9F00'
            office='Gestor de Marketing'
            name='Luan Dias'
            text='Minha missão é elaborar e executar estratégias de marketing para conquistar a confiança das pessoas. Muito mais do que vendas, eu e minha equipe estamos empenhados em nutrir relacionamento e conquistar confiança de nossos clientes e parceiros.'
          />

          <Content
            photo='https://scontent.fmii1-1.fna.fbcdn.net/v/t39.30808-6/322010786_1370720147022997_6184420096510968339_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=StW6ax3LM-EAX_eWa76&_nc_ht=scontent.fmii1-1.fna&oh=00_AfAQkHNgeJpcbNIujiRSsF6K9W1K5ZdL5M3_ozfzU2xNww&oe=640A9F00'
            office='Gestor de Marketing'
            name='Luan Dias'
            text='Minha missão é elaborar e executar estratégias de marketing para conquistar a confiança das pessoas. Muito mais do que vendas, eu e minha equipe estamos empenhados em nutrir relacionamento e conquistar confiança de nossos clientes e parceiros.'
          />

        </div>

        <Link className='
          flex
          items-center justify-center
          gap-3
          bg-[#00D948]
          px-5 md:px-7 py-3
          rounded
        ' href='/contato'>Faça parte de nosso time de especialistas</Link>

      </div>

    </div>

  )

}