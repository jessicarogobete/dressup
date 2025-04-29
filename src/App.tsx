import partygirl from './assets/Partygirlsmall.png'
import ClothingButtons from './Components/clothing-buttons'
import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState('');
  const clothingTypes = ['hair', 'tops', 'bottoms', 'shoes'];
  const buttons = clothingTypes.map(item => <button onClick={() => setState(item)}>{item}</button>)
  return (
    <div className='changeroom'>
      <h1>Dress Up Party Girl!</h1>
      <div className='main_area'>
        <img className='partygirl' src={partygirl} />
        {
          (state != '') ? <></> :
            < div className='ButtonsContainer'>
              {buttons}
            </div>
        }

      </div>
    </div >
  )
}

export default App
