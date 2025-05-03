import partygirl from './assets/Partygirlsmall.png'
import pink_button_shirt from './assets/pink_button_shirt.png'
import graphic_pink_tee from './assets/Graphic pink tee.png';
import pink_bob from './assets/Pink bob.png';
import orange_pants from './assets/Orange-pants.png';
import pigtails from './assets/Pigtails.png';
import placeholder from './assets/Placeholder.png';
import ponytail from './assets/Ponytail.png';
import fairy_sleeves from './assets/Fix long sleeve fairy top.png';
import { useState } from 'react'
import './App.css'
import ClothingType from './Components/clothing-type';

export enum CLOTHING_TYPES {
  HAIR,
  TOP,
  BOTTOM,
  SHOES,
  NONE
}

const ClothingTypes = ["hair", "tops", "bottoms", "shoes"];


const ClothingTypesMap = new Map<string, CLOTHING_TYPES>([
  ["hair", CLOTHING_TYPES.HAIR],
  ["tops", CLOTHING_TYPES.TOP],
  ["bottoms", CLOTHING_TYPES.BOTTOM],
  ["shoes", CLOTHING_TYPES.SHOES]
]);

//CONSTANTS
const shirts = [placeholder, pink_button_shirt, graphic_pink_tee, fairy_sleeves]
const hairs = [pigtails, pink_bob, ponytail];
const bottoms = [placeholder, orange_pants];


function App() {
  const [state, setState] = useState(CLOTHING_TYPES.NONE);
  let isStart = state === CLOTHING_TYPES.NONE;
  const buttons = ClothingTypes.map(item => <button onClick={() => setState(ClothingTypesMap.get(item) ?? CLOTHING_TYPES.NONE)}>{item}</button>);



  return (
    <div className='changeroom'>
      <h1>Dress Up Party Girl!</h1>
      <div className='main_area'>

        {isStart ?
          (
            <div className='ButtonsContainer'>
              {buttons}
            </div>
          ) : <button className='exit-button' onClick={() => setState(CLOTHING_TYPES.NONE)}>exit</button>
        }
        <div className='partygirl'>
          <img className='partygirl-base' src={partygirl} />
          <ClothingType options={hairs} state={state} type={CLOTHING_TYPES.HAIR} />
          <ClothingType options={shirts} state={state} type={CLOTHING_TYPES.TOP} />
          <ClothingType options={bottoms} state={state} type={CLOTHING_TYPES.BOTTOM} />
        </div>



      </div>
    </div >
  )
}

export default App
