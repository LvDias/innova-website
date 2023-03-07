import Script from 'next/script'

export default function Body(){

  return(

    <>

      <Script dangerouslySetInnerHTML={{__html: `

        <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        
      `}} />
    
    </>

  )

}