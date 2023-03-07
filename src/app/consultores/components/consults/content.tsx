export default function Content(props : any){

  return(

    <div className='
      flex flex-col
      gap-3.5
    '>

      <div className={`
        aspect-[4/5]
        bg-center bg-cover
        rounded
      `} style={{ backgroundImage: `url("${ props.photo }")` }} />

      <h6 className='
        text-[#23323B]
      '>{`>`} { props.office }</h6>

      <h3 className='
        text-[#8FA6B2]
        uppercase
      '>{ props.name }</h3>

      <h5 className='
        text-[#23323B]
      '>
        { props.text }
      </h5>

    </div>

  )

}