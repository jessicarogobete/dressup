import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import { ClothingTypes } from "./constants";

beforeAll(() => {
    render(App());
});

it('Renders title text', () => {
    const h2Text = screen.getByText('Dress up party girl!');
    expect(h2Text).toBeInTheDocument();
});

it('renders image of each clothing type button', () => {
    ClothingTypes.forEach((type) => {
        expect(screen.getByTestId(type)).toBeInTheDocument();
    })
})

it('updates state to select clothing type when clothing button is clicked', () => {
    const topsButton = screen.getByTestId("tops");
    expect(topsButton).toBeInTheDocument();
    fireEvent.click(topsButton);
    expect(topsButton).not.toBeInTheDocument();
});