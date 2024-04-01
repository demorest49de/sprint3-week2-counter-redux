import React, {useState} from 'react';
import {FieldSet} from "../FieldSet/FieldSet";
import {Input} from '../Input/Input';
import {Button} from "../Button/Button";
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {firstGradient, secondGradient} from '../Gradient/GradientTypes';
import {CounterParamsType} from "../Counter/Counter";

type SetterType = {
    // getSetterInputParameters: (maxValue: string, startValue: string, hasAnyError: boolean, isButtonPressed: boolean) => void
    // hasAnyErrorsHandler: (hasError: boolean) => void
    cp: CounterParamsType
    seCounterParams: (value: CounterParamsType) => void
    // setButton: boolean
    // inputState: boolean
}

export const Setter = ({
                           // getSetterInputParameters,
                           // hasAnyErrorsHandler
                           cp,
                           seCounterParams,
                           // setButton,
                           // inputState,
                       }: SetterType) => {

        return (
            <MainBlockStyled
                isSetter={true}
            >
                <GradientWrapperStyled>
                    <FieldSet
                        gradient={firstGradient}
                        hasToBeMargin={true}
                        inputFieldSet={false}
                    >
                        {/*<Input*/}
                        {/*    name={cp.max.name}*/}
                        {/*    inputValue={cp.max.inputValue}*/}
                        {/*    hasError={cp.max.hasError}*/}
                        {/*    focus={cp.max.focus}*/}
                        {/*    onChangeMax={onChangeMax}*/}
                        {/*    bothError={bothError}*/}
                        {/*    inputState={inputState}*/}
                        {/*/>*/}
                        {/*<Input*/}
                        {/*    name={start.name}*/}
                        {/*    inputValue={start.inputValue}*/}
                        {/*    hasError={start.hasError}*/}
                        {/*    onChangeStart={onChangeStart}*/}
                        {/*    bothError={bothError}*/}
                        {/*    inputState={inputState}*/}
                        {/*/>*/}
                    </FieldSet>
                    <FieldSet gradient={secondGradient}
                              buttonFieldSet={true}
                    >
                        {/*<Button*/}
                        {/*    name={'set'}*/}
                        {/*    //TODO podumat kak sdelat bez etogo metoda*/}
                        {/*    hasAnyInputErrors={hasAnyErrors}*/}
                        {/*    isSetButtonPressed={isSetButtonPressed}*/}
                        {/*    disabled={setButton}*/}
                        {/*/>*/}
                    </FieldSet>
                </GradientWrapperStyled>
            </MainBlockStyled>
        );
    }
;