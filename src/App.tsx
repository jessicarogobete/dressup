import partygirl from './assets/Partygirlsmall.png'
import pink_button_shirt from './assets/pink_button_shirt.png'
import placeholder from './assets/Placeholder.png';
import { useState } from 'react'
import './App.css'
import ClothingType from './Components/clothing-type';



//CONSTANTS
const shirts = [placeholder, pink_button_shirt]

function App() {
  const [state, setState] = useState('');
  const clothingTypes = ['hair', 'tops', 'bottoms', 'shoes'];
  const buttons = clothingTypes.map(item => <button onClick={() => setState(item)}>{item}</button>)
  return (
    <div className='changeroom'>
      <h1>Dress Up Party Girl!</h1>
      <div className='main_area'>
        {
          (state != '')
            ?
            <ClothingType options={shirts}></ClothingType>
            :
            <div className='ButtonsContainer'>
              {buttons}
            </div>
        }
        <img className='partygirl' src={partygirl} />


      </div>
    </div >
  )
}

export default App
