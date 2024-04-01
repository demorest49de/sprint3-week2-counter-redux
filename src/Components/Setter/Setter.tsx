import React, {useState} from 'react';
import {FieldSet} from "../FieldSet/FieldSet";
import {Input} from '../Input/Input';
import {Button} from "../Button/Button";
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {firstGradient, secondGradient} from '../Gradient/GradientTypes';
import {CounterParamsType} from "../Counter/Counter";

type SetterType = {
    cp: CounterParamsType
    changeMaxValue: (value: string) => void
    changeStartValue: (value: string) => void
    setButtonHandler: () => void
}

export const Setter = ({
                           changeMaxValue,
                           changeStartValue,
                           cp,
    setButtonHandler,
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
                            disabledState={cp.disabledState}
                        />
                        <Input
                            name={'start'}
                            inputValue={cp.start.inputValue}
                            hasError={cp.start.hasError}
                            onChangeStart={changeStartValue}
                            disabledState={cp.disabledState}
                        />
                    </FieldSet>
                    <FieldSet gradient={secondGradient}
                              buttonFieldSet={true}
                    >
                        <Button
                            name={'set'}
                            setButtonHandler={setButtonHandler}
                            disabled={cp.hasErrorGlobal}
                        />
                    </FieldSet>
                </GradientWrapperStyled>
            </MainBlockStyled>
        );
    }
;