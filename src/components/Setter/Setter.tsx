import React from 'react';
import {FieldSet} from "../FieldSet/FieldSet";
import {Input} from '../Input/Input';
import {Button} from "../Button/Button";
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {firstGradient, secondGradient} from '../Gradient/GradientTypes';
import {CounterParamsType} from "../Counter/Counter";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

type SetterType = {
    changeMaxValue: (value: string) => void
    changeStartValue: (value: string) => void
    setButtonHandler: () => void
}

export const Setter = ({
                           changeMaxValue,
                           changeStartValue,

    setButtonHandler,
                       }: SetterType) => {

    const cp = useSelector<AppRootStateType, CounterParamsType>(state => state.counter)
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
                            focus={true}
                            onChangeMax={changeMaxValue}
                            disabledState={cp.inputIsDisabled}
                        />
                        <Input
                            name={'start'}
                            inputValue={cp.start.inputValue}
                            hasError={cp.start.hasError}
                            onChangeStart={changeStartValue}
                            disabledState={cp.inputIsDisabled}
                        />
                    </FieldSet>
                    <FieldSet gradient={secondGradient}
                              buttonFieldSet={true}
                    >
                        <Button
                            name={'set'}
                            setButtonHandler={setButtonHandler}
                            disabled={cp.hasErrorGlobal || cp.setButtonDisabled}
                        />
                    </FieldSet>
                </GradientWrapperStyled>
            </MainBlockStyled>
        );
    }
;