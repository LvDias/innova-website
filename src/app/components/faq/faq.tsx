export default function Dropdown(props : any){

  return(

    <>
    
      <input className={`
        hidden
        peer/${props.value}
      `} type="checkbox" id={props.value} />
      <label htmlFor={props.value} className={`
        relative
        flex flex-col
        peer-checked/${props.value}:[&>div]:h-auto peer-checked/${props.value}:[&>div]:py-5
        peer-checked/${props.value}:[&>h5>div]:rotate-180
      `}>

        <h5 className='
          flex
          justify-between items-center
          text-[#8FA6B2]
          border-2 border-solid border-[#D0D0D0]
          bg-[#F8F8F8]
          p-5
          cursor-pointer
        '>
          
          { props.title }
          <div className='
            w-7 h-7
            bg-[#D0D0D0]
            rounded-full
            bg-[url("/assets/images/arrow-down.svg")] bg-center
            transition-all duration-150
            rotate-0
          ' />

        </h5>

        <div className='
          bg-white
          h-0
          overflow-hidden
          px-5
          transition-all duration-150
        '>
          <h6>
            { props.text }
          </h6>
        </div>

      </label>
    
    </>

  )

}