enum ArrowVariants {
    left,
    right
}

//arrow button component to switch between clothing options
export default function ArrowButton(image: string) {
    const type: ArrowVariants;
    return (
        <button onClick={switchClothes}>
            <img src={image}></img>
        </button>
    )
}