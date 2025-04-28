import rightArrow from './assets/arrow-right.svg'
import partygirl from './assets/Partygirlsmall.png'
import ClothingButtons from './Components/clothing-buttons'
import './App.css'

function App() {

  return (
    <div className='changeroom'>
      <h1>Dress Up Party Girl!</h1>
      <div className='main_area'>
        <img className='partygirl' src={partygirl} />
        <ClothingButtons />
      </div>
    </div>
  )
}

export default App
