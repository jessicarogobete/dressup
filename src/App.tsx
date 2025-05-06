import partygirl from './assets/Partygirlsmall.png'
import pink_button_shirt from './assets/pink_button_shirt.png'
import graphic_pink_tee from './assets/Graphic pink tee.png';
import black_tee from './assets/Plain black tee.png';
import white_tee from './assets/Plain white tee.png';
import brown_tank from './assets/Top tank brown.png';
import frilly_blouse from './assets/Top frilly blouse.png';

import pink_bob from './assets/Pink bob.png';
import orange_pants from './assets/Orange-pants.png';
import pigtails from './assets/Pigtails.png';
import placeholder from './assets/Placeholder.png';
import ponytail from './assets/Ponytail.png';
import fairy_sleeves from './assets/Fix long sleeve fairy top.png';
import trainers from './assets/Trainers.png';
import mjs from './assets/Pink Mjs.png';
import blue_shoes from './assets/Blue shoes.png';
import ballet_shoes from './assets/Ballet shoes.png';
import keens from './assets/Boots keen.png';
import bratz_sandals from './assets/Shoes bratz sandal.png';

import plain_socks from './assets/Plain socks.png';
import black_socks from './assets/Socks black.png';

import baggy_jeans from './assets/Baggy jeans.png';
import white_skirt from './assets/White long skirt.png';
import jean_skirt from './assets/Skirt jean.png';
import jorts from './assets/Jorts.png';

import corduroy_jacket from './assets/Corduroy coat.png';
import Button_Bottoms from './assets/Button bottoms.png';
import Button_Tops from './assets/Button tops.png';
import Button_Hair from './assets/Button hair.png';
import Button_Shoes from './assets/Button shoes.png';
import Button_Layers from './assets/Button layers.png';
import Button_Socks from './assets/Button socks.png';
import { useState } from 'react'
import './App.css'
import ClothingType from './Components/clothing-type';

export enum CLOTHING_TYPES {
  HAIR,
  TOP,
  LAYER,
  BOTTOM,
  SOCK,
  SHOES,
  NONE
}

const ClothingTypes = ["hair", "tops", "bottoms", "shoes", "socks", "layers"];


const ClothingTypesMap = new Map<string, CLOTHING_TYPES>([
  ["hair", CLOTHING_TYPES.HAIR],
  ["tops", CLOTHING_TYPES.TOP],
  ["layers", CLOTHING_TYPES.LAYER],
  ["bottoms", CLOTHING_TYPES.BOTTOM],
  ["socks", CLOTHING_TYPES.SOCK],
  ["shoes", CLOTHING_TYPES.SHOES]
]);

//CONSTANTS
const shirts = [placeholder, pink_button_shirt, graphic_pink_tee, fairy_sleeves, white_tee, black_tee, brown_tank, frilly_blouse];
const layers = [placeholder, corduroy_jacket];
const hairs = [pigtails, pink_bob, ponytail];
const bottoms = [placeholder, orange_pants, white_skirt, baggy_jeans, jean_skirt, jorts];
const shoes = [placeholder, mjs, blue_shoes, trainers, keens, bratz_sandals, ballet_shoes];
const socks = [placeholder, plain_socks, black_socks];
function getImage(item: string) {
  switch (item) {
    case 'shoes':
      return Button_Shoes;
    case 'hair':
      return Button_Hair;
    case 'tops':
      return Button_Tops;
    case 'bottoms':
      return Button_Bottoms;
    case 'layers':
      return Button_Layers;
    case 'socks':
      return Button_Socks
    default: return ''
  }
}

function App() {
  const [state, setState] = useState(CLOTHING_TYPES.NONE);
  const isStart = state === CLOTHING_TYPES.NONE;
  const buttons = ClothingTypes.map(item => <img src={
    getImage(item)

  } onClick={() => setState(ClothingTypesMap.get(item) ?? CLOTHING_TYPES.NONE)
  }></img >);



  return (
    <div className='changeroom'>
      <h1>Dress Up Party Girl!</h1>
      <div className='main_area'>

        {isStart ?
          (
            <div className='ButtonsContainer'>
              {buttons}
            </div>
          ) : <button className='exit-button' onClick={() => setState(CLOTHING_TYPES.NONE)}>back</button>
        }
        <div className='partygirl'>
          <img className='partygirl-base' src={partygirl} />
          <ClothingType options={hairs} state={state} type={CLOTHING_TYPES.HAIR} />
          <ClothingType options={socks} state={state} type={CLOTHING_TYPES.SOCK} />
          <ClothingType options={shoes} state={state} type={CLOTHING_TYPES.SHOES} />
          <ClothingType options={bottoms} state={state} type={CLOTHING_TYPES.BOTTOM} />
          <ClothingType options={shirts} state={state} type={CLOTHING_TYPES.TOP} />
          <ClothingType options={layers} state={state} type={CLOTHING_TYPES.LAYER} />

        </div>

      </div>
    </div >
  )
}

export default App;
