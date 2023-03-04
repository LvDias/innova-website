'use client'

import React from 'react'

export default function Dropdown(props : any){

  const handleFaq = (id : string) => {

    const checkbox = document.querySelector(`#${id}`)
    const arrow = document.querySelector(`#arrow-${id}`)
    const container = document.querySelector(`#container-${id}`)

    const { checked } = (checkbox as HTMLInputElement)

    if(checked){

      arrow?.classList.remove('rotate-180')
      container?.classList.remove('py-5', 'h-auto')

      return

    }

    arrow?.classList.add('rotate-180')
    container?.classList.add('py-5', 'h-auto')

  }

  return(

    <>
    
      <input className={`
        hidden
      `} id={props.id} type="checkbox" />
      <label onClick={
        () => handleFaq(props.id)
      } htmlFor={props.id} className={`
        relative
        flex flex-col
      `}>

        <h5 className='
          flex
          justify-between items-center
          text-[#8FA6B2]
          border-2 border-solid border-[#D0D0D0]
          bg-[#F8F8F8]
          p-5
          gap-5
          cursor-pointer
        '>
          
          { props.title }
          <div id={`arrow-${props.id}`} className='
            w-7 h-7
            bg-[#D0D0D0]
            p-5 md:p-2.5
            rounded-full
            bg-[url("/assets/images/arrow-down.svg")] bg-center
            transition-all duration-150
            rotate-0
          ' />

        </h5>

        <div className='
          bg-white
          h-0
          overflow-hidden
          px-5
          transition-all duration-150
        ' id={`container-${props.id}`}>
          <h6>
            { props.text }
          </h6>
        </div>

      </label>
    
    </>

  )

}