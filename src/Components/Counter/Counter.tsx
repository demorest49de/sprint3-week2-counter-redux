import React from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    IncrementButtonIsPressedAC, ResetButtonIsPressedAC,
    SetButtonIsPressedAC
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

export const Counter = () => {

    const counterParams
        = useSelector<AppRootStateType, CounterParamsType>(
        state => state.counter)
    const dispatch = useDispatch();
    console.log(' counterParams: ', counterParams);

    function changeMaxValue(value: string) {
        const action = ChangeMaxValueAC(value)
        dispatch(action)
    }

    function changeStartValue(value: string) {
        const action = ChangeStartValueAC(value)
        dispatch(action)
    }

    function incrementButtonHandler() {
        const action = IncrementButtonIsPressedAC()
        dispatch(action)
    }

    function resetButtonHandler() {
        const action = ResetButtonIsPressedAC()
        dispatch(action)
    }

    function setButtonHandler() {
        const action = SetButtonIsPressedAC()
        dispatch(action)
    }

    return (
        <div className={s.counter}>

            <Setter
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                cp={counterParams}
                setButtonHandler={setButtonHandler}
            />

            <Incrementer
                cp={counterParams}
                incrementButtonHandler={incrementButtonHandler}
                resetButtonHandler={resetButtonHandler}
            />
        </div>
    );
};

//TODO useSelector - минус лишние пропсы
//TODO - избавиться от лишн состояний (репозиторий)
//TODO - проверка  на целое число, поставить ограничение  по величине числа