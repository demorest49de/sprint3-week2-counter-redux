import React from 'react';
import {ButtonStyled} from "./ButtonStyled";

type ButtonType = {
    name: string
    onClickHandler: () => void
    disabled: boolean
}

export const Button = ({
                           name,
                           onClickHandler,
                           disabled,
                       }: ButtonType) => {

    return (
        <ButtonStyled
            disabled={disabled}
            onClick={onClickHandler}
        >
            {name}
        </ButtonStyled>
    );
};