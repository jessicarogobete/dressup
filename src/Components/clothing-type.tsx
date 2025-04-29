import { useState } from "react";

// stores clothing type options and renders which is currently selected
export default function ClothingType(currentOption: number) {
    const options: string[] = [];

    return (
        <>
            <button>back</button>
            <img src={options[currentOption]}></img>
            <button>forward</button>
        </>

    )
}