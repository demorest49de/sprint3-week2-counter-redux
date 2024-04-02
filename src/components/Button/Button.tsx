import React from 'react';
import {ButtonStyled} from "./ButtonStyled";

type ButtonType = {
    name: string
    setButtonHandler?: () => void
    resetButtonHandler?: () => void
    incrementButtonHandler?: () => void
    hasAnyInputErrors?: boolean
    disabled?: boolean
}

export const Button = ({
                           name,
                           setButtonHandler,
                           incrementButtonHandler,
                           resetButtonHandler,
                           disabled,
                       }: ButtonType) => {

    function onClickHandler() {
        switch (true) {
            case !!setButtonHandler:
                setButtonHandler?.();
                break;
            case !!resetButtonHandler:
                resetButtonHandler?.();
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