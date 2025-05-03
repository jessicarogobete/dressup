import { useState } from "react";
import './clothing-type.css'
import '../App.css'
import { CLOTHING_TYPES } from "../App";


// stores clothing type options and renders which is currently selected
// type should be passed in to styles to know where to render the arrow buttons
export default function ClothingType(props: { options: string[], state: CLOTHING_TYPES, type: CLOTHING_TYPES }) {
    const [currentOption, setCurrentOption] = useState(0)

    //toggle backwards through clothing items
    const goBack = () => {
        if (currentOption > 0) {
            setCurrentOption(currentOption - 1)
        } else {
            setCurrentOption(props.options.length - 1);
        }
    }

    //toggle forwards through clothing items
    const goForward = () => {
        if (currentOption < props.options.length - 1) {
            setCurrentOption(currentOption + 1)
        } else {
            setCurrentOption(0);
        }
    }
    const showButtons = props.state == props.type;


    //TODO: MAKE THIS A BUTTON CLASS AND REMOVE CLOTHING IMAGE FROM HERE
    return (
        <>
            <img className='partygirl-base' src={props.options[currentOption]}></img>
            {showButtons ?
                (<div className='ButtonContainer'>
                    <button className='arrow-button' onClick={() => goBack()} data-testid='back-button'>back</button>
                    <button className='arrow-button' onClick={() => goForward()} data-testid='forward-button'>forward</button>
                </div>) : <></>
            }

        </>

    )
}