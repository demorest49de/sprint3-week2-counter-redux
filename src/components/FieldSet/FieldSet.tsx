import React from 'react';
import styled, {css} from 'styled-components';
import {GradientWrapperStyled} from '../GradientWrapper/GradientWrapperStyled';
import {GradientType} from "../Gradient/GradientTypes";


export type ValuesType = {

    hasToBeMargin?: boolean | undefined
    gradient: GradientType
    inputFieldSet?: boolean
    buttonFieldSet?: boolean
    children?: JSX.Element | JSX.Element[]
}

export const FieldSet =({
                             gradient,
                             hasToBeMargin,
                             children,
                             inputFieldSet,
                             buttonFieldSet
                         }: ValuesType) => {
    return (
        <ValuesFieldsetStyled
            gradient={gradient}
            hasToBeMargin={hasToBeMargin}>
            <GradientWrapperStyled
                inputFieldSet={inputFieldSet}
                buttonFieldSet={buttonFieldSet}
            >
                {children}
            </GradientWrapperStyled>
        </ValuesFieldsetStyled>
    )
        ;
};


type ValuesFieldSetType = {
    hasToBeMargin: boolean | undefined
    gradient: GradientType
    inputFieldset?: boolean
    buttonFieldset?: boolean
}


const ValuesFieldsetStyled
    = styled.div<ValuesFieldSetType>`
  width: 100%;
  height: 130px;
  border-radius: 15px;
  padding: 3px;
  background: ${props => props.gradient.background};
  ${props => props.hasToBeMargin && css<ValuesFieldSetType>`
    margin-bottom: 15px;
  `}
`

