export default function InputOne(props : any){

  return(

    <input className='
      p-2.5
      outline-none
      placeholder:font-bold
      placeholder:text-sm
    ' type={props.type} name={props.name} placeholder={props.placeholder} required={props.required} />

  )

}