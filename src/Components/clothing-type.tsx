import { useState } from "react";


export default function ClothingType(currentOption: number) {
    const options: string[] = [];

    return (
        <img src={options[currentOption]}></img>
    )
}