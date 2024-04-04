import React from 'react';
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {FieldSet} from "../FieldSet/FieldSet";
import {firstGradient, secondGradient} from "../Gradient/GradientTypes";
import {Button} from "../Button/Button";
import {SpanStyled} from "./SpanStyled";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../state/store";
import {SetCounterAC, SetStartAC, Status, StatusType} from "../../state/counter-reducer";


export const ScorePanel = () => {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
    const dispatch = useDispatch()

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
                        isNumber={status === Status.error}
                        isErrorText={status === Status.error}
                        turnRed={startValue === maxValue}
                    >
                        {status === Status.counter ?
                            startValue :
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
                        onClickHandler={()=>{dispatch(SetCounterAC())}}
                        disabled={status === Status.error}/>
                    <Button
                        name={'reset'}
                        onClickHandler={()=>{}}
                        disabled={status === Status.error}/>
                </FieldSet>
            </GradientWrapperStyled>
        </MainBlockStyled>
    );
};