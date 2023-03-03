import AboutUs from './components/aboutUs/component'
import Banks from './components/banks/components'
import CallToAction from './components/callToAction/component'
import Consults from './components/consults/component'
import Education from './components/education/component'
import FirstView from './components/firstView/component'
import Solutions from './components/solutions/component'

export default function Home() {

  return (
    
    <main>

      <FirstView />
      <Solutions />
      <Education />
      <AboutUs />
      <Banks />
      <Consults />
      <CallToAction />

    </main>

  )

}
