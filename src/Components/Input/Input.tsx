import React, {ChangeEvent} from "react";
import styled, {css} from "styled-components";

type CustomInputType = {
    name: string
    inputValue: string
    hasError: boolean
    focus?: boolean
    onChangeStart?: (value: string) => void
    onChangeMax?: (value: string) => void
    // bothError: boolean
    disabledState: boolean
}

export const Input = ({
                          name,
                          inputValue,
                          hasError,
                          focus,
                          onChangeStart,
                          onChangeMax,
                          disabledState
                      }: CustomInputType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const handler =
            onChangeMax ? onChangeMax : onChangeStart
        handler?.(event.currentTarget.value)
    }

    return <InputStyled
        hasError={hasError}
    >
        <label>{name} value:</label>
        <input type={'number'}
               value={inputValue}
               autoFocus={focus}
               onChange={onChangeHandler}
               disabled={disabledState}
        />
    </InputStyled>
}

type CustomInputStyledType = {
    hasError: boolean
}

const InputStyled
    = styled.div<CustomInputStyledType>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    color: #6fe3ee;
    font-weight: 700;
    font-size: 22px;
  }

  input {
    height: 42px;
    border: 2px solid #6fe3ee;
    max-width: 130px;
    font-size: 22px;
    text-align: center;
    font-weight: inherit;
    border-radius: 10px;
    ${props => (props.hasError)
      && css<CustomInputStyledType>`
        background-color: rgba(245, 40, 145, 0.36);
      `}
  }
`