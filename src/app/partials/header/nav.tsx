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

  return(

    <nav className='
      flex
      items-center
      gap-5
    '>

      <Link onClick={
        addClassLinkNav
      } id='home' href='/' className='
        active-link
      '>Home</Link>

      <Link href='/'>Soluções</Link>

      <Link href='/'>Sobre nós</Link>

      <Link onClick={
        addClassLinkNav
      } id='consultants' href='/'>Nossos consultores</Link>

      <Link href='/'>Trabalhe Conosco</Link>

      <Link href='/'>Simulação de Empréstimo</Link>

      <Link href='/'>FAQ</Link>

      <Link onClick={
        addClassLinkNav
      } id='contact' href='/'>Contate-nos</Link>

    </nav>

  )

}