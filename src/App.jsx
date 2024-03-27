import '../src/main.css'
import MiApi from './components/MiApi'

const App = () => {
  return (
    <div className='landing d-flex flex-column justify-content-center align-items-center bg-dark'>
      <img className='landingImage' src='https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_Super.png' />
      <div className='api'>
        <MiApi />
      </div>
    </div>
  )
}

export default App
