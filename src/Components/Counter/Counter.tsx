import React, {useReducer, useState} from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";
import {ChangeMaxValueAC, ChangeStartValueAC, counterReducer} from "../../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export type CounterParamsType = {
    maxValue: string
    startValue: string
    hasAnyError: boolean
    setIsPressed: boolean
    incState: boolean
    resetState: boolean
    setState: boolean
    disabledState: boolean
    turnRed: boolean
    start: StartValueType
    max: MaxValueType
    bothError: boolean
}

type StartValueType = {
    name: string
    inputValue: string
    hasError: boolean
}

type MaxValueType = {
    name: string
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

    // function getSetterParameters(maxValue: string, startValue: string, hasAnyError: boolean, setIsPressed: boolean) {
    //     setCounterParams({
    //         ...counterParams,
    //         maxValue,
    //         hasAnyError,
    //         startValue,
    //         setIsPressed,
    //     })
    //     // setSetState(true)
    //     // setIncState(false)
    //     // setResetState(false)
    //     // setInputState(true)
    // }

    // function hasAnyErrorsHandler(hasAnyError: boolean) {
    //     seCounterParams({...counterParams, hasAnyError})
    // }

    // function isIncButtonPressedHandler(isPressed: boolean) {
    //     const inc = (+counterParams.startValue + 1).toString()
    //     if (+inc <= +counterParams.maxValue) {
    //         seCounterParams({...counterParams, startValue: inc})
    //     }
    //     if (+inc === +counterParams.maxValue) {
    //         setIncState(true)
    //         setTurnRed(true)
    //     }
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

    //
    // let hasAnyErrors = start.hasError || max.hasError || bothError
    //
    // function isSetButtonPressed(isPressed: boolean) {
    //     getSetterParameters(max.inputValue, start.inputValue, hasAnyErrors, isPressed)
    // }

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
                // isIncButtonPressedHandler={isIncButtonPressedHandler}
                // isResetButtonPressedHandler={isResetButtonPressedHandler}
                // turnRed={turnRed}
                turnRed={false}
            />
        </div>
    );
};