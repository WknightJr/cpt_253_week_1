
import {Greeting} from './components/greetings'
import {MyButton} from './components/mybutton'

function App() {

  return (
    <>
      <Greeting name='Brett' />
      <Greeting name="Jane" />
      <Greeting name="Steve" />

      <MyButton />
    </>
  )
}

export default App
