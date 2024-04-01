import React from 'react';
import {ButtonStyled} from "./ButtonStyled";

type ButtonType = {
    name: string
    setButtonHandler?: () => void
    isResetButtonPressed?: () => void
    incrementButtonHandler?: () => void
    hasAnyInputErrors?: boolean
    disabled?: boolean
}

export const Button = ({
                           name,
                           setButtonHandler,
                           incrementButtonHandler,
                           isResetButtonPressed,
                           disabled,
                       }: ButtonType) => {

    function onClickHandler() {
        switch (true) {
            case !!setButtonHandler:
                setButtonHandler?.();
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
            disabled={disabled}
            onClick={onClickHandler}
        >
            {name}
        </ButtonStyled>
    );
};