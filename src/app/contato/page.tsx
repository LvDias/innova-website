import InputOne from '../components/templates/input/inputOne';

export default function Contact(){

  return(

    <div className='
      flex
      justify-center
      pt-[164px]
      bg-cover bg-center bg-[url("/assets/images/first-view.svg")]
    '>

      <div className='
        flex
        px-5 py-7 xl:py-14
        gap-7 xl:gap-14
        max-w-screen-2xl
      '>

        <div className='
          flex flex-col
          bg-[#23323B]
          p-7 md:p-14
          gap-7
        '>

          <h1 className='
            text-center
            text-white
            text-shadow-none
          '>Entre em contato</h1>

          <h5 className='
            text-center
          '>Preencha o formulário e fale com um de nossos consultores.</h5>

          <form className='
            flex flex-col
            gap-7
          ' action='/api/contact' method='post'>

            <InputOne 
              type='text'
              name='name'
              placeholder='Nome'
              required={true}
            />

            <InputOne 
              type='email'
              name='email'
              placeholder='E-mail:'
              required={true}
            />

            <InputOne 
              type='text'
              name='phone'
              placeholder='Telefone (DDD):'
              required={true}
            />

            <InputOne 
              type='text'
              name='subject'
              placeholder='Assunto:'
              required={true}
            />

            <textarea  className='
              p-2.5
              outline-none
              placeholder:font-bold
              placeholder:text-base
            ' name="message" cols={30} rows={10} placeholder='Mensagem:' required />

            <div className='
              flex flex-col xl:flex-row
              justify-between items-center
              gap-7 xl:gap-14
            '>

              <div className='
                flex
                justify-between items-center
                gap-2.5
              '>

                <input className='cursor-pointer' type='checkbox' name='check' id='policy' required />
                <label htmlFor='policy'>
                  <p className='
                    text-[#8FA6B2]
                  '>Ao enviar a mensagem você confirma que está de acordo com nossos termos de privacidade</p>
                </label>

              </div>

              <button className='
                bg-[#0C92F2]
                hover:bg-[#2EA8FF]
                rounded
                transition-all duration-300
                border-none
                cursor-pointer
                text-white
                px-5 md:px-7 py-3
                w-full xl:w-auto
              '>
                Enviar
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  )

}