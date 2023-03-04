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
        gap-7 md:gap-14
        px-5 py-7 md:py-14
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

              <Dropdown 
                title='Aqui vai a pergunta mais comum feita pelo potencial cliente'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                id='faq1'
              />

              <Dropdown 
                title='Aqui vai a pergunta mais comum feita pelo potencial cliente'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                id='faq2'
              />

              <Dropdown 
                title='Aqui vai a pergunta mais comum feita pelo potencial cliente'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                id='faq3'
              />

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
            flex flex-col md:grid md:grid-cols-3
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