import ButtonTwo from '../button/buttonTwo'
import Content from './content'
import Dropdown from './faq'

export default function Faq(){

  return(

    <section className='
      flex
      justify-center
    '>

      <div className='
        flex flex-col
        items-center
        gap-14
        px-5 py-14
        w-full max-w-screen-2xl
      '>

        <div className='
          flex flex-col
          gap-7
          items-center
          w-full
        '>

          <h1 className='
            text-center
            text-black
            text-shadow-none
          '>Perguntas frequentes</h1>
          <h5 className='
            text-center
          '>Separamos uma lista com as dúvidas mais comuns abaixo</h5>

          <div className='
            flex flex-col
            gap-3.5
            items-center
            w-full
          '>

            <div className='
              flex flex-col
              w-full max-w-screen-lg
            '>

              {/* <Dropdown 
                title='Aqui vai a pergunta mais comum feita pelo potencial cliente'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                value='faq1'
              /> */}

              <input className={`
                hidden
                peer/faq1
              `} type="checkbox" id='faq1' />
              <label htmlFor='faq1' className={`
                relative
                flex flex-col
                peer-checked/faq1:[&>div]:h-auto peer-checked/faq1:[&>div]:py-5
                peer-checked/faq1:[&>h5>div]:rotate-180
              `}>

                <h5 className='
                  flex
                  justify-between items-center
                  text-[#8FA6B2]
                  border-2 border-solid border-[#D0D0D0]
                  bg-[#F8F8F8]
                  p-5
                  cursor-pointer
                '>

                  Aqui vai a pergunta mais comum feita pelo potencial cliente
                  <div className='
                    w-7 h-7
                    bg-[#D0D0D0]
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
                '>
                  <h6>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h6>
                </div>

              </label>

            </div>

          </div>

        </div>

        <div className='
          flex flex-col
          gap-7
          items-center
          w-full
        '>

          <h2 className='
            text-center
          '>Aprenda tudo sobre finanças em nosso portal de conteúdo</h2>

          <h5 className='
            text-center
          '>
            Leia artigos sobre educação financeira no portal de conteúdo e aprenda a utilizar <br />
            diversas estratégias e ferramentas para manter sua saúde financeira em dia.
          </h5>

          <div className='
            grid grid-cols-3
            gap-5
            w-full
          '>

              <Content 
                category='Category name'
                date='Date'
                title='Lorem ipsum dolor sit amet, consectetur.'
                text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.'
              />

              <Content 
                category='Category name'
                date='Date'
                title='Lorem ipsum dolor sit amet, consectetur.'
                text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.'
              />

              <Content 
                category='Category name'
                date='Date'
                title='Lorem ipsum dolor sit amet, consectetur.'
                text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.'
              />

              <Content 
                category='Category name'
                date='Date'
                title='Lorem ipsum dolor sit amet, consectetur.'
                text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.'
              />

              <Content 
                category='Category name'
                date='Date'
                title='Lorem ipsum dolor sit amet, consectetur.'
                text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.'
              />

              <Content 
                category='Category name'
                date='Date'
                title='Lorem ipsum dolor sit amet, consectetur.'
                text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.'
              />

          </div>

          <ButtonTwo
            url='https://api.whatsapp.com/send/?phone=5514998343492&text=Oi,+L%C3%A9o.+Quero+participar+da+masterclass+do+Prof.+Matrone!&type=phone_number&app_absent=0'
            text='Ver todos os posts >'
          />

        </div>

      </div>

    </section>

  )

}