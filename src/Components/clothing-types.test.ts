import { screen, render } from "@testing-library/react";
import ClothingType from "./clothing-type";
import { CLOTHING_TYPES } from "../constants";
import { expect, test } from 'vitest';

const testClothes = ['', 'shirt-1']

test('should show toggle forward button', () => {
    render(ClothingType({
        options: testClothes,
        state: CLOTHING_TYPES.TOP,
        type: CLOTHING_TYPES.TOP
    }))
    expect(screen.getByTestId('back-button')).toBeDefined();
});

test('should show toggle backwards button', () => {

});

test('should swtestch active clothing option on toggle forward', () => {

});

test('should swtestch clothing option on toggle backward', () => {

});

test('should display active clothing testem', () => {

});