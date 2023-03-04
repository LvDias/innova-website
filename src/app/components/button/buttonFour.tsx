export default function ButtonFour(props : any){

  return(

    <a className='
      flex
      items-center justify-center
      bg-[#F8F8F8]
      rounded
      px-7 py-3
      text-shadow-none
    ' href={props.url}>
      <h2 className='
        text-[#0C92F2]
      '>
        {props.text}
      </h2>
    </a>

  )

}