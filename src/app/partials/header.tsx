import Image from 'next/image'
import ButtonOne from '../components/templates/button/buttonOne'
import Nav from './header/nav'

export default function Header(){

  return(

    <header className='
      flex
      justify-center
    '>

      <div className='
        flex
        items-center justify-between
        px-5 pt-7 xl:pt-14
        w-full
        max-w-screen-2xl
        gap-5
      '>

        <Image className='hidden xl:flex' src='/assets/images/logo-innova.svg' width={190} height={60} alt='Logo Innova' />
        <Image className='xl:hidden' src='/assets/images/logo-innova.svg' width={114} height={36} alt='Logo Innova' />

        <div className='
          flex
          gap-5
          items-center
          [&>a]:hidden xl:[&>a]:flex
        '>

          <Nav />

          <ButtonOne 
            url={process.env.WHATSAPP} 
            text='Conversar pelo Whatsapp'
          />
          
        </div>
        
      </div>      

    </header>

  )

}