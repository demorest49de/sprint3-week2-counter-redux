import React, {memo} from 'react';
import {ButtonStyled} from "./ButtonStyled";

type ButtonType = {
    name: string
    onClickHandler: () => void
    disabled: boolean
}

export const Button = memo(({
                                name,
                                onClickHandler,
                                disabled,
                            }: ButtonType) => {
    console.log(' button render: ', disabled);
    return (
        <ButtonStyled
            disabled={disabled}
            onClick={onClickHandler}
        >
            {name}
        </ButtonStyled>
    );
})