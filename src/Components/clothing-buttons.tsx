import './clothing-buttons.css';
import { useState } from 'react';

export default function ClothingButtons() {
    const clothingTypes = ['hair', 'tops', 'bottoms', 'shoes'];
    const buttons = clothingTypes.map(item => <button>{item}</button>)
    let [currentOption, switchCurrentOption] = useState();
    return (
        <div className='ButtonsContainer'>
            {buttons}
        </div>
    )
}