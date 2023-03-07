'use client'

import Link from 'next/link'

export default function Nav(props : any){

  const addClassLinkNav = () => {

    let elementHome = document.querySelector('#home')
    let elementConsultants = document.querySelector('#consultants')
    let elementContact = document.querySelector('#contact')

    switch(props.url){

      case 'consultants':
        elementHome?.classList.remove('active-link')
        elementContact?.classList.remove('active-link')
        
        elementConsultants?.classList.add('active-link')
        break
      case 'contact':
        elementHome?.classList.remove('active-link')
        elementConsultants?.classList.remove('active-link')
        
        elementContact?.classList.add('active-link')
        break
      default:
        elementConsultants?.classList.remove('active-link')
        elementContact?.classList.remove('active-link')
        
        elementHome?.classList.add('active-link')
    }

  }

  const handleMenu = (element : boolean) => {

    const menu = document.querySelector('#menu-nav')

    if(element){

      menu?.classList.remove('invisible')
      menu?.classList.remove('opacity-0')
      menu?.classList.add('visible')
      menu?.classList.add('opacity-100')

      return

    }

    menu?.classList.remove('visible')
    menu?.classList.remove('opacity-100')
    menu?.classList.add('opacity-0')
    menu?.classList.add('invisible')

    return

  }

  return(

    <>

      <nav className='
        hidden xl:flex
        items-center
        gap-5
      '>

        <Link onClick={
          addClassLinkNav
        } id='home' href='/' className='
          active-link
        '>Home</Link>

        <a href='/#solutions'>Soluções</a>

        <a href='/#about-us'>Sobre nós</a>

        <Link onClick={
          addClassLinkNav
        } id='consultants' href='/consultores'>Nossos consultores</Link>

        <Link href='/contato'>Trabalhe Conosco</Link>

        <Link href='/contato'>Simulação de Empréstimo</Link>

        <a href='/#faq'>FAQ</a>

        <Link onClick={
          addClassLinkNav
        } id='contact' href='/contato'>Contate-nos</Link>

      </nav>

      <div className='
        grid grid-rows-3
        items-between
        xl:hidden
        w-10 h-10
        gap-1.5
        p-2
        bg-white
        [&>span]:w-full [&>span]:bg-gray-400 [&>span]:rounded
        order-last
        rounded
        cursor-pointer
      ' onClick={
        () => handleMenu(true)
      }>

        <span />

        <span />

        <span />

      </div>

      <div className='
        flex
        fixed
        left-0 top-0
        z-20
        w-screen h-screen
        bg-black/90
        items-center justify-center
        invisible
        opacity-0
        transition-all duration-500
      ' id='menu-nav'>

        <div onClick={
          () => handleMenu(false)
        } className='
          absolute
          top-[26px]
          right-5
          w-7 h-7
          cursor-pointer
        '>
          
          <span className='
            absolute
            bottom-1/2 translate-y-1/2
            w-full h-1
            bg-white
            rotate-45
            rounded
          ' />
          <span className='
            absolute
            bottom-1/2 translate-y-1/2
            w-full h-1
            bg-white
            -rotate-45
            rounded
          ' />

        </div>

        <nav className='
          flex flex-col
          gap-5
        '>

          <Link onClick={
            addClassLinkNav
          } id='home' href='/' className='
            active-link
            text-center
          '>Home</Link>

          <Link className='
            text-center
          ' href='/'>Soluções</Link>

          <Link className='
            text-center
          ' href='/'>Sobre nós</Link>

          <Link className='
            text-center
          ' onClick={
            addClassLinkNav
          } id='consultants' href='/'>Nossos consultores</Link>

          <Link className='
            text-center
          ' href='/'>Trabalhe Conosco</Link>

          <Link className='
            text-center
          ' href='/'>Simulação de Empréstimo</Link>

          <Link className='
            text-center
          ' href='/'>FAQ</Link>

          <Link className='
            text-center
          ' onClick={
            addClassLinkNav
          } id='contact' href='/'>Contate-nos</Link>

        </nav>

      </div>

    </>

  )

}