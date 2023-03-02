import Image from 'next/image';

export default function ButtonOne(props : any){

  return(

    <a className='
      flex
      items-center justify-center
      gap-3
      bg-[#00D948]
      px-7 py-3
      rounded
    ' href={props.url}>
      {props.text}
    </a>

  )

}