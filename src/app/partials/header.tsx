import Image from 'next/image'
import ButtonOne from '../components/button/buttonOne'
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
        px-5 pt-7 md:pt-14
        w-full
        max-w-screen-2xl
        gap-5
      '>

        <Image className='hidden md:flex' src='/assets/images/logo-innova.svg' width={190} height={60} alt='Logo Innova' />
        <Image className='md:hidden' src='/assets/images/logo-innova.svg' width={114} height={36} alt='Logo Innova' />

        <div className='
          flex
          gap-5
          items-center
          [&>a]:hidden md:[&>a]:flex
        '>

          <Nav />

          <ButtonOne 
            url='https://api.whatsapp.com/send/?phone=5514998343492&text=Oi,+L%C3%A9o.+Quero+participar+da+masterclass+do+Prof.+Matrone!&type=phone_number&app_absent=0' 
            text='Conversar pelo Whatsapp'
          />
          
        </div>
        
      </div>      

    </header>

  )

}