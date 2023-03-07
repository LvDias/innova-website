import Image from 'next/image';

export default function ButtonOne(props : any){

  return(

    <a className='
      flex
      items-center justify-center
      gap-3
      bg-[#00D948]
      px-5 md:px-7 py-3
      rounded
    ' href={props.url}>
      <Image src='/assets/images/whatsapp.svg' width={25} height={25} alt='Logo Whatsapp' />
      {props.text}
    </a>

  )

}