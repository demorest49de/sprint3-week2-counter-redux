import React from 'react';
import {ButtonStyled} from "./ButtonStyled";

type ButtonType = {
    name: string
    isSetButtonPressed?: (isPressed: boolean) => void
    isResetButtonPressed?: (isPressed: boolean) => void
    isIncButtonPressed?: (isPressed: boolean) => void
    hasAnyInputErrors?: boolean
    disabled: boolean
}

export const Button = ({
                           name,
                           isSetButtonPressed,
                           disabled,
                           hasAnyInputErrors,
                           isIncButtonPressed,
                           isResetButtonPressed
                       }: ButtonType) => {

    function onClickHandler() {
        switch (true) {
            case !!isSetButtonPressed:
                isSetButtonPressed?.(true);
                break;
            case !!isResetButtonPressed:
                isResetButtonPressed?.(true);
                break;
            case !!isIncButtonPressed:
                isIncButtonPressed?.(true);
                break;
        }

    }

    return (
        <ButtonStyled
            disabled={hasAnyInputErrors ? hasAnyInputErrors : disabled}
            onClick={onClickHandler}
        >
            {name}
        </ButtonStyled>
    );
};