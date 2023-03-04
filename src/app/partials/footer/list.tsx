export default function List(props : any){

  return(

    <div className='
      flex
      items-center
      gap-2.5
    '>

      <div className='
        bg-white
        bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCI+CjxwYXRoIGQ9Ik0gMjYuOTgwNDY5IDUuOTkwMjM0NCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMjYuMjkyOTY5IDYuMjkyOTY4OCBMIDExIDIxLjU4NTkzOCBMIDQuNzA3MDMxMiAxNS4yOTI5NjkgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDMuMjkyOTY4OCAxNi43MDcwMzEgTCAxMC4yOTI5NjkgMjMuNzA3MDMxIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxMS43MDcwMzEgMjMuNzA3MDMxIEwgMjcuNzA3MDMxIDcuNzA3MDMxMiBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMjYuOTgwNDY5IDUuOTkwMjM0NCB6Ij48L3BhdGg+Cjwvc3ZnPg==")]
        bg-center bg-contain
        w-5 h-5
      ' />

      <h6 className='
        text-white
      '>{ props.text }</h6>

    </div>

  )

}