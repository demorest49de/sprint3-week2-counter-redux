import React from 'react';
import {ButtonStyled} from "./ButtonStyled";

type ButtonType = {
    name: string
    isSetButtonPressed?: () => void
    isResetButtonPressed?: () => void
    incrementButtonHandler?: () => void
    hasAnyInputErrors?: boolean
    disabled?: boolean
}

export const Button = ({
                           name,
                           isSetButtonPressed,
                           incrementButtonHandler,
                           isResetButtonPressed,
                           disabled,
                           hasAnyInputErrors
                       }: ButtonType) => {

    function onClickHandler() {
        switch (true) {
            case !!isSetButtonPressed:
                isSetButtonPressed?.();
                break;
            case !!isResetButtonPressed:
                isResetButtonPressed?.();
                break;
            case !!incrementButtonHandler:
                incrementButtonHandler?.();
                break;
        }

    }

    return (
        <ButtonStyled
            // disabled={hasAnyInputErrors ? hasAnyInputErrors : disabled}
            disabled={disabled}
            onClick={onClickHandler}
        >
            {name}
        </ButtonStyled>
    );
};