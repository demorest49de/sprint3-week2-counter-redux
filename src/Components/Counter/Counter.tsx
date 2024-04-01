import React, {useReducer, useState} from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    IncrementButtonIsPressedAC, SetButtonIsPressedAC
} from "../../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export type CounterParamsType = {
    maxValue: string
    startValue: string

    hasAnyError: boolean
    setButtonisPressed: boolean
    incButtonisPressed: boolean
    resetButtonisPressed: boolean
    setState: boolean
    disabledState: boolean
    turnRed: boolean
    start: StartValueType
    max: MaxValueType
    bothError: boolean
}

type StartValueType = {
    inputValue: string
    hasError: boolean
}

type MaxValueType = {
    inputValue: string
    hasError: boolean
    focus: boolean
}

export const Counter = () => {

    const counterParams
        = useSelector<AppRootStateType, CounterParamsType>(
        state => state.counter)
    const dispatch = useDispatch();
    console.log(' counterParams: ', counterParams);

    // function hasAnyErrorsHandler(hasAnyError: boolean) {
    //     seCounterParams({...counterParams, hasAnyError})
    // }

    // function isResetButtonPressedHandler(isPressed: boolean) {
    //     setSetState(false)
    //     setResetState(true)
    //     setIncState(true)
    //     setInputState(false)
    //     seCounterParams({...counterParams, maxValue: '2', startValue: '0', hasAnyError: false, setIsPressed: false})
    //     setTurnRed(false)
    // }

    function changeMaxValue(value: string) {
        const action = ChangeMaxValueAC(value)
        dispatch(action)

        // hasAnyErrorsHandler(hasError || +value <= +start.inputValue)
    }

    function changeStartValue(value: string) {
        const action = ChangeStartValueAC(value)
        dispatch(action)

        // hasAnyErrorsHandler(hasError || +value >= +max.inputValue)
    }

    function incrementButtonHandler() {
        const action = IncrementButtonIsPressedAC()
        dispatch(action)
    }

    function SetButtonHandler() {
        const action = SetButtonIsPressedAC()
        dispatch(action)
    }

    //
    // let hasAnyErrors = start.hasError || max.hasError || bothError


    return (
        <div className={s.counter}>

            <Setter
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                cp={counterParams}
                // getSetterInputParameters={getSetterParameters}
                // hasAnyErrorsHandler={hasAnyErrorsHandler}
                // seCounterParams={setCounterParams}
                // setButton={setState}
                // inputState={inputState}
            />

            <Incrementer
                cp={counterParams}
                incrementButtonHandler={incrementButtonHandler}
                // isResetButtonPressedHandler={isResetButtonPressedHandler}
                // turnRed={turnRed}
                turnRed={false}
            />
        </div>
    );
};