import React, {useState} from 'react';
import {FieldSet} from "../FieldSet/FieldSet";
import {Input} from '../Input/Input';
import {Button} from "../Button/Button";
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {firstGradient, secondGradient} from '../Gradient/GradientTypes';

type SetterType = {
    getSetterInputParameters: (maxValue: string, startValue: string, hasAnyError: boolean, isButtonPressed: boolean) => void
    setButton: boolean
    inputState: boolean
    hasAnyErrorsHandler: (hasError: boolean) => void
}

type ValueType = {
    name: string,
    inputValue: string
    hasError: boolean
    focus?: boolean
}

export const Setter = ({
                           getSetterInputParameters,
                           setButton,
                           inputState,
                           hasAnyErrorsHandler
                       }: SetterType) => {

        const [start, setStart]
            = useState<ValueType>(
            {
                name: 'start',
                inputValue: '0',
                hasError: false,
            }
        )

        const [max, setMax]
            = useState<ValueType>(
            {
                name: 'max',
                inputValue: '2',
                hasError: false,
                focus: true
            }
        )

        const [bothError, setBothError]
            = useState(false)

        function onChangeStart(value: string) {
            const hasError = +value < 0
            setStart({...start, hasError: hasError, inputValue: value})
            setBothError(+value >= +max.inputValue)

            hasAnyErrorsHandler(hasError || +value >= +max.inputValue)
        }

        function onChangeMax(value: string) {
            const hasError = +value < 0
            setMax({...max, hasError: hasError, inputValue: value})
            setBothError(+value <= +start.inputValue)

            hasAnyErrorsHandler(hasError || +value <= +start.inputValue)
        }

        let hasAnyErrors = start.hasError || max.hasError || bothError

        function isSetButtonPressed(isPressed: boolean) {
            getSetterInputParameters(max.inputValue, start.inputValue, hasAnyErrors, isPressed)
        }

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
                            name={max.name}
                            inputValue={max.inputValue}
                            hasError={max.hasError}
                            focus={max.focus}
                            onChangeMax={onChangeMax}
                            bothError={bothError}
                            inputState={inputState}
                        />
                        <Input
                            name={start.name}
                            inputValue={start.inputValue}
                            hasError={start.hasError}
                            onChangeStart={onChangeStart}
                            bothError={bothError}
                            inputState={inputState}
                        />
                    </FieldSet>
                    <FieldSet gradient={secondGradient}
                              buttonFieldSet={true}
                    >
                        <Button
                            name={'set'}
                            //TODO podumat kak sdelat bez etogo metoda
                            hasAnyInputErrors={hasAnyErrors}
                            isSetButtonPressed={isSetButtonPressed}
                            disabled={setButton}
                        />
                    </FieldSet>
                </GradientWrapperStyled>
            </MainBlockStyled>
        );
    }
;