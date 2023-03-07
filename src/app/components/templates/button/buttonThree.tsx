import Link from 'next/link';

export default function ButtonThree(props : any){

  return(

    <Link className='
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
    </Link>

  )

}