import React from 'react';
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {FieldSet} from "../FieldSet/FieldSet";
import {firstGradient, secondGradient} from "../Gradient/GradientTypes";
import {Button} from "../Button/Button";
import {SpanStyled} from "./SpanStyled";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../state/store";
import {SetCounterAC, SetIncAC, SetResetAC, SetStartAC, Status, StatusType} from "../../state/counter-reducer";


export const ScorePanel = () => {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
    const dispatch = useDispatch()
    console.log(' status: ', status);
    console.log(' count , maxValue, startValue: ', count, maxValue, startValue);
    const onClickInc = () => {
        if (count < maxValue) {
            dispatch(SetIncAC())
        } else {

        }
    }

    const onClickReset = () => {
        dispatch(SetResetAC(startValue))
    }

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
                        isNumber={status === Status.counter}
                        isErrorText={status === Status.error}
                        turnRed={status !== Status.error && count === maxValue}
                    >
                        {status === Status.counter ?
                            count :
                            (status === Status.error ?
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
                        onClickHandler={onClickInc}
                        disabled={status === Status.error
                            || status === Status.settings
                            || count === maxValue
                    }/>
                    <Button
                        name={'reset'}
                        onClickHandler={onClickReset}
                        disabled={status === Status.error || status === Status.settings}/>
                </FieldSet>
            </GradientWrapperStyled>
        </MainBlockStyled>
    );
};