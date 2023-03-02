import Squads from './firstView/squads'
import Text from './firstView/text'
import Header from './header'

export default function FirstView(){

  return(

    <section className='
      flex flex-col
      w-full
      bg-cover bg-center bg-[url("/assets/images/first-view.svg")]
    '>

      <Header />

      <div className='
        flex
        justify-center
      '>

        <div className='
          flex flex-col
          justify-between
          px-5 py-14
          gap-14
          max-w-screen-2xl
        '>

          <Text />

          <Squads />

        </div>

      </div>

    </section>

  )

}