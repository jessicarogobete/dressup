import { useState } from "react";

// stores clothing type options and renders which is currently selected
// type should be passed in to styles to know where to render the arrow buttons
export default function ClothingType(props: { options: string[] }) {
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


    return (
        <>
            <button onClick={() => goBack()} data-testid='back-button'>back</button>
            <img src={props.options[currentOption]}></img>
            <button onClick={() => goForward()} data-testid='forward-button'>forward</button>
        </>

    )
}