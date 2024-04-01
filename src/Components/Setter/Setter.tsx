import React, {useState} from 'react';
import {FieldSet} from "../FieldSet/FieldSet";
import {Input} from '../Input/Input';
import {Button} from "../Button/Button";
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {firstGradient, secondGradient} from '../Gradient/GradientTypes';
import {CounterParamsType} from "../Counter/Counter";

type SetterType = {
    // // hasAnyErrorsHandler: (hasError: boolean) => void
    cp: CounterParamsType
    // // setButton: boolean
    // // inputState: boolean
    changeMaxValue: (value: string) => void
    changeStartValue: (value: string) => void
}

export const Setter = ({
                           changeMaxValue,
                           changeStartValue,
                           cp,
                           // getSetterInputParameters,
                           // hasAnyErrorsHandler
                           // seCounterParams,
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
                        <Input
                            name={'max'}
                            inputValue={cp.max.inputValue}
                            hasError={cp.max.hasError}
                            focus={cp.max.focus}
                            onChangeMax={changeMaxValue}
                            bothError={cp.bothError}
                            disabledState={cp.disabledState}
                        />
                        <Input
                            name={'start'}
                            inputValue={cp.start.inputValue}
                            hasError={cp.start.hasError}
                            onChangeStart={changeStartValue}
                            bothError={cp.bothError}
                            disabledState={cp.disabledState}
                        />
                    </FieldSet>
                    <FieldSet gradient={secondGradient}
                              buttonFieldSet={true}
                    >
                        <Button
                            name={'set'}
                            //TODO podumat kak sdelat bez etogo metoda
                            hasAnyInputErrors={false}
                            // isSetButtonPressed={isSetButtonPressed}
                            disabled={false}
                        />
                    </FieldSet>
                </GradientWrapperStyled>
            </MainBlockStyled>
        );
    }
;