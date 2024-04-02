import React from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";
import {
    SetMaxAC,
    SetStartAC,
    IncAC, ResetAC,
    SetSetAC
} from "../../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export type CounterParamsType = {

    hasErrorGlobal: boolean
    setButtonDisabled: boolean
    incButtonDisabled: boolean
    resetButtonDisabled: boolean

    inputIsDisabled: boolean

    start: InputValueType
    max: InputValueType
}

type InputValueType = {
    inputValue: string
    hasError: boolean
}

export enum Status {
    counter= 'counter',
    settings = 'settings',
    error = 'error'}

export type StatusType = Status.counter | Status.settings | Status.error

export const Counter = () => {

    const counterParams
        = useSelector<AppRootStateType, CounterParamsType>(
        state => state.counter)
    const dispatch = useDispatch();
    console.log(' counterParams: ', counterParams);

    function changeMaxValue(value: string) {
        const action = SetMaxAC(value)
        dispatch(action)
    }

    function changeStartValue(value: string) {
        const action = SetStartAC(value)
        dispatch(action)
    }

    function incrementButtonHandler() {
        const action = IncAC()
        dispatch(action)
    }

    function resetButtonHandler() {
        const action = ResetAC()
        dispatch(action)
    }

    function setButtonHandler() {
        const action = SetSetAC()
        dispatch(action)
    }

    return (
        <div className={s.counter}>

            <Setter
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setButtonHandler={setButtonHandler}
            />

            <Incrementer
                incrementButtonHandler={incrementButtonHandler}
                resetButtonHandler={resetButtonHandler}
            />
        </div>
    );
};

//TODO useSelector - минус лишние пропсы - done
//TODO - избавиться от лишн состояний (репозиторий) -
//TODO - проверка  на целое число, поставить ограничение  по величине числа
//TODO - как правильно доставать селектором переменные (репозиторий - 13 - 15 строка)
//TODO - ипользовать memo(), useMemo(), useCallback()
