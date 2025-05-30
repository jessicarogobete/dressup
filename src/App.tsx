import partygirl from './assets/Partygirlsmall.png'
import pink_button_shirt from './assets/pink_button_shirt.png'
import graphic_pink_tee from './assets/Graphic pink tee.png';
import black_tee from './assets/Plain black tee.png';
import white_tee from './assets/Plain white tee.png';
import brown_tank from './assets/Top tank brown.png';
import frilly_blouse from './assets/Top frilly blouse.png';

import t_shirt_dress from './assets/Dress t shirt.png';
import pink_tank_top from './assets/Top pink tank.png';
import blue_tank_top from './assets/Top tank blue.png';
import uw_crewneck from './assets/Uw crewneck.png';
import blue_dress from './assets/Dress blue long.png';

import pink_bob from './assets/Pink bob.png';
import red_bob from './assets/Hair red bob.png';
import bucket_hat from './assets/Bucket hat.png';
import pink_hat from './assets/Pink hat.png';


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
import leopard_sandals from './assets/Shoes sandals leopard.png';
import bratz_sandals from './assets/Shoes bratz sandal.png';

import plain_socks from './assets/Plain socks.png';
import black_socks from './assets/Socks black.png';

import baggy_jeans from './assets/Baggy jeans.png';
import white_skirt from './assets/White long skirt.png';
import jean_skirt from './assets/Skirt jean.png';
import jorts from './assets/Jorts.png';
import beige_skirt from './assets/Beige pleated skirt.png';

import corduroy_jacket from './assets/Corduroy coat.png';
import pink_cardigan from './assets/Layer Pink cardigan.png';
import yellow_cardigan from './assets/Layer yellow cardigan.png';
import black_buttonup from './assets/Layer black cord.png';
import green_cardigan from './assets/Layer green cardigan.png';

import Button_Bottoms from './assets/Button bottoms.png';
import Button_Tops from './assets/Button tops.png';
import Button_Hair from './assets/Button hair.png';
import Button_Shoes from './assets/Button shoes.png';
import Button_Layers from './assets/Button layers.png';
import Button_Socks from './assets/Button socks.png';
import { useState } from 'react'
import './App.css'
import ClothingType from './Components/clothing-type';
import { CLOTHING_TYPES, ClothingTypes, ClothingTypesMap } from './constants';

//CONSTANTS
const shirts = [placeholder, pink_button_shirt, graphic_pink_tee, fairy_sleeves, white_tee, black_tee, brown_tank, frilly_blouse, t_shirt_dress, pink_tank_top, blue_tank_top, blue_dress];
const layers = [placeholder, corduroy_jacket, yellow_cardigan, pink_cardigan, uw_crewneck, black_buttonup, green_cardigan];
const hairs = [pigtails, pink_bob, ponytail, red_bob, bucket_hat, pink_hat];
const bottoms = [placeholder, orange_pants, white_skirt, baggy_jeans, jean_skirt, jorts, beige_skirt];
const shoes = [placeholder, mjs, blue_shoes, trainers, keens, leopard_sandals, bratz_sandals, ballet_shoes];
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
    getImage(item)} onClick={() => setState(ClothingTypesMap.get(item) ?? CLOTHING_TYPES.NONE)
    } data-testid={item}
  />);


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
