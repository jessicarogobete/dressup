import App from "./App";
import { render, screen } from "@testing-library/react";


it('Renders title text', () => {
    render(App());
    const h2Text = screen.getByText('Dress up party girl!');
    expect(h2Text).toBeInTheDocument();
});