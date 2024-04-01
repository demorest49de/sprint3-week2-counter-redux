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
    // isResetButtonPressedHandler: (isPressed: boolean) => void
    // isIncButtonPressedHandler: (isPressed: boolean) => void
    turnRed?: boolean
}

export const Incrementer = ({
                                cp,
                                // isResetButtonPressedHandler,
                                // isIncButtonPressedHandler,
                                turnRed
                            }: IncrementerType) => {

    // function isResetButtonPressed(isPressed: boolean) {
    //     isResetButtonPressedHandler(isPressed);
    // }
    //
    // function isIncButtonPressed(isPressed: boolean) {
    //     isIncButtonPressedHandler(isPressed);
    // }


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
                        isText={!cp.setIsPressed}
                        isErrorText={cp.hasAnyError}
                        turnRed={turnRed}
                    >
                        {cp.setIsPressed ?
                            cp.startValue :
                            cp.hasAnyError ?
                                'Incorrect value!' :
                                'enter values and press \'set\''}</SpanStyled>
                </FieldSet>
                <FieldSet gradient={firstGradient}
                          buttonFieldSet={true}
                >
                    <Button
                        name={'inc'}
                        // isIncButtonPressed={isIncButtonPressed}
                        disabled={cp.incState}/>
                    <Button
                        name={'reset'}
                        // isResetButtonPressed={isResetButtonPressed}
                        disabled={cp.resetState}/>
                </FieldSet>
            </GradientWrapperStyled>
        </MainBlockStyled>
    );
};