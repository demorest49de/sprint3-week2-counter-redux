import React from 'react';
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {FieldSet} from "../FieldSet/FieldSet";
import {firstGradient, secondGradient} from "../Gradient/GradientTypes";
import {Button} from "../Button/Button";
import {SpanStyled} from "./SpanStyled";
import {CounterParamsType} from "../Counter/Counter";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

type IncrementerType = {
    resetButtonHandler: () => void
    incrementButtonHandler: () => void
}

export const Incrementer = ({
                                resetButtonHandler,
                                incrementButtonHandler,
                            }: IncrementerType) => {
    const cp = useSelector<AppRootStateType, CounterParamsType>(state => state.counter)
    return (
        <MainBlockStyled
            isIncrementer={true}
        >
            <GradientWrapperStyled>
                <FieldSet gradient={secondGradient}
                          inputFieldSet={true}
                          hasToBeMargin={true}
                >
                    <SpanStyled
                        isNumber={cp.setButtonDisabled}
                        isErrorText={cp.hasErrorGlobal}
                        turnRed={cp.start.inputValue
                            === cp.max.inputValue}
                    >
                        {cp.setButtonDisabled ?
                            cp.start.inputValue :
                            (cp.hasErrorGlobal ?
                                'Incorrect value!' :
                                'enter values and press \'set\'')
                        }
                    </SpanStyled>
                </FieldSet>
                <FieldSet gradient={firstGradient}
                          buttonFieldSet={true}
                >
                    <Button
                        name={'inc'}
                        incrementButtonHandler={incrementButtonHandler}
                        disabled={cp.incButtonDisabled}/>
                    <Button
                        name={'reset'}
                        resetButtonHandler={resetButtonHandler}
                        disabled={cp.resetButtonDisabled}/>
                </FieldSet>
            </GradientWrapperStyled>
        </MainBlockStyled>
    );
};