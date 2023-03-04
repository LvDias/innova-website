export default function Content(props : any){

  return(

    <div className='
      flex flex-col
      gap-5
    '>

      <div className='
        bg-gray-300
        aspect-video
      ' />

      <div className='
        flex
        gap-2.5
        justify-start
      '>

        <h6>{ props.category }</h6>
        <h6>|</h6>
        <h6>{ props.date }</h6>

      </div>

      <h4 className='
        text-[#8FA6B2]
      '>{ props.title }</h4>

      <h6>{ props.text }</h6>

    </div>

  )

}