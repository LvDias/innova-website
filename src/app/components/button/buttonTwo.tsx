export default function ButtonTwo(props : any){

  return(

    <a className='
      bg-[#2EA8FF]
      rounded
      hover:mr-1
      hover:[&>div]:ml-2
      transition-all duration-300
    ' href={props.url}>
      <div className='
        flex
        items-center justify-center
        bg-[#0C92F2]
        px-7 py-3
        transition-all duration-300
        rounded
      '>
        {props.text}
      </div>
    </a>

  )

}