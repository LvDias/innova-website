'use client'

export default function Attention(){

  const closeComponentAttention = () => {

    let element = document.querySelector('#component-attention')
    element?.classList.add('hidden')

  }

  return(

    <div id='component-attention' className='
      flex
      justify-center
      w-full 
      bg-[#004CF2]
    '>

      <div className='
        flex
        items-center
        w-full
        px-5 py-2.5
        max-w-screen-2xl
      '>

        <h6 className='
        w-full
        text-white text-center
        '>
          Atenção: Não pedimos pagamento antecipado para aprovação do empréstimo
        </h6>

        <div onClick={
          closeComponentAttention
        } className='
          relative
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

      </div>

    </div>

  )

}