import React, {useCallback, useEffect} from 'react';
import {FieldSet} from "../FieldSet/FieldSet";
import {Input} from '../Input/Input';
import {Button} from "../Button/Button";
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {firstGradient, secondGradient} from '../Gradient/GradientTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../state/store";
import {
    SetCounterAC,
    SetErrorAC,
    SetMaxAC, SetResetAC,
    SetSetAC,
    SetStartAC,
    Status,
    StatusType
} from "../../state/counter-reducer";


export const SetterPanel = () => {
        const count = useSelector<AppStateType, number>(state => state.counter.count)
        const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
        const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
        const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
        const dispatch = useDispatch()
        console.log(' status: ', status);

        useEffect(() => {
            (maxValue <= startValue || startValue < 0 || maxValue <= 0) && dispatch(SetErrorAC())
        }, [status, maxValue, startValue, dispatch])

        const setHelper = (
            value: number,
            cb: (newValue: number) =>
                ({ type: string, newValue: number }),
            name = 'max'
        ) => {

            if (value > 99) {
                return dispatch(cb(99))
            }
            if (value <= -99) {
                return dispatch(cb(1))
            }

            dispatch(SetResetAC(0))
            dispatch(SetSetAC())
            dispatch(cb(value))
        }


        const changeMaxValue = useCallback((value: number) => {
            console.log(' changeMaxValue: ');
            setHelper(value, SetMaxAC)
        }, [maxValue, dispatch])

        const changeStartValue = useCallback((value: number) => {
            setHelper(value, SetStartAC)
        }, [startValue, dispatch])

        const setButtonHandler = useCallback(() => {
            dispatch(SetCounterAC())
        }, [dispatch])


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
                            focus={true}
                            inputValue={maxValue}
                            hasError={status === Status.error}
                            callback={changeMaxValue}
                        />
                        <Input
                            name={'start'}
                            inputValue={startValue}
                            hasError={status === Status.error}
                            callback={changeStartValue}
                        />
                    </FieldSet>
                    <FieldSet gradient={secondGradient}
                              buttonFieldSet={true}
                    >
                        <Button
                            name={'set'}
                            onClickHandler={setButtonHandler}
                            disabled={status === Status.error
                                || status === Status.counter
                            }
                        />
                    </FieldSet>
                </GradientWrapperStyled>
            </MainBlockStyled>
        );
    }
;

//TODO dispatch нужно добавлять в хуки если да то зачем?