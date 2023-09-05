import {render, screen} from "@testing-library/react";
import CustomButton from "./CustomButton";

describe('counter reducer', () => {
    it('should show the button label', () => {
        const {getByTestId} = render(<CustomButton data-testid={'test'} label="foo"/>);
        expect(getByTestId("test").textContent).toEqual("foo");
    });

    it('should show the button enabled', () => {
        render(<CustomButton data-testid={'test'} label="foo"/>);
        expect(screen.getByRole('button')).not.toBeDisabled();
    });
});
