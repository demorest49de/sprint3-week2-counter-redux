import React from 'react';
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {FieldSet} from "../FieldSet/FieldSet";
import {firstGradient, secondGradient} from "../Gradient/GradientTypes";
import {Button} from "../Button/Button";
import {SpanStyled} from "./SpanStyled";
import {CounterParamsType} from "../Counter/Counter";

type IncrementerType = {
    cp: CounterParamsType
    // isResetButtonPressedHandler: () => void
    incrementButtonHandler: () => void
}

export const Incrementer = ({
                                cp,
                                // isResetButtonPressedHandler,
                                incrementButtonHandler,
                            }: IncrementerType) => {

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
                        turnRed={cp.turnRed}
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
                        // isResetButtonPressed={isResetButtonPressed}
                        disabled={cp.resetButtonDisabled}/>
                </FieldSet>
            </GradientWrapperStyled>
        </MainBlockStyled>
    );
};