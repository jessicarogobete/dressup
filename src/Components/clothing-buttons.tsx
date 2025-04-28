import './clothing-buttons.css';

export default function ClothingButtons() {
    const clothingTypes = ['hair', 'tops', 'bottoms', 'shoes'];
    const buttons = clothingTypes.map(item => <button>{item}</button>)
    return (
        <div className='ButtonsContainer'>
            {buttons}
        </div>
    )
}