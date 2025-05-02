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
  let isStart = state === '';
  const clothingTypes = ['hair', 'tops', 'bottoms', 'shoes'];
  const buttons = clothingTypes.map(item => <button onClick={() => setState(item)}>{item}</button>);

  return (
    <div className='changeroom'>
      <h1>Dress Up Party Girl!</h1>
      <div className='main_area'>

        {isStart ?
          (
            <div className='ButtonsContainer'>
              {buttons}
            </div>
          ) : <button className='exit-button' onClick={() => setState('')}>exit</button>
        }
        <div className='partygirl'>
          <img className='partygirl-base' src={partygirl} />
          <ClothingType options={shirts} state={state}></ClothingType>

        </div>



      </div>
    </div >
  )
}

export default App
