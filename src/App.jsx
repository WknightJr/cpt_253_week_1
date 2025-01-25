
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
//I added the button here. It is imported from the new component I made//

export default App
