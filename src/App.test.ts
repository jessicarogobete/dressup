import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import { ClothingTypes } from "./constants";
import { expect, test } from 'vitest';

beforeAll(() => {
    render(App());
});

test('Renders ttestle text', () => {
    const h2Text = screen.getByText('Dress up party girl!');
    expect(h2Text).toBeDefined();
});

test('renders image of each clothing type button', () => {
    ClothingTypes.forEach((type) => {
        expect(screen.getByTestId(type)).toBeDefined();
    })
})

test('updates state to select clothing type when clothing button is clicked', () => {
    const topsButton = screen.getByTestId("tops");
    expect(topsButton).toBeDefined();
    fireEvent.click(topsButton);
    expect(topsButton).toBeUndefined();
});