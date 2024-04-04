import React from 'react';
import {ButtonStyled} from "./ButtonStyled";

type ButtonType = {
    name: string
    setButtonHandler: () => void
    disabled: boolean
}

export const Button = ({
                           name,
                           setButtonHandler,
                           disabled,
                       }: ButtonType) => {

    return (
        <ButtonStyled
            disabled={disabled}
            onClick={setButtonHandler}
        >
            {name}
        </ButtonStyled>
    );
};