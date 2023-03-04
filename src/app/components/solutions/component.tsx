import Content from './content';
import Text from './text';

export default function Solutions(){

  return(

    <section className='
      flex
      justify-center
    '>

      <div className='
        flex flex-col
        gap-7 xl:gap-14
        px-5 py-7 xl:py-14
        max-w-screen-2xl
        w-full
      '>

        <Text />

        <Content />

      </div>
      
    </section>

  )

}