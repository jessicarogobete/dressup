import { screen, render } from "@testing-library/react";
import ClothingType from "./clothing-type";

const testClothes = ['', 'shirt-1']

it('should show toggle forward button', () => {
    render(ClothingType({
        options: testClothes
    }))
    expect(screen.getByTestId('back-button')).toBeInTheDocument();
});

it('should show toggle backwards button', () => {

});

it('should switch active clothing option on toggle forward', () => {

});

it('should switch clothing option on toggle backward', () => {

});

it('should display active clothing item', () => {

});