import React, {useReducer, useState} from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";
import {ChangeMaxValueAC, counterReducer} from "../../state/counter-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export type CounterParamsType = {
    maxValue: string
    startValue: string
    hasAnyError: boolean
    setIsPressed: boolean
    incState: boolean
    resetState: boolean
    setState: boolean
    inputState: boolean
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
    //
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
    //
    // function isResetButtonPressedHandler(isPressed: boolean) {
    //     setSetState(false)
    //     setResetState(true)
    //     setIncState(true)
    //     setInputState(false)
    //     seCounterParams({...counterParams, maxValue: '2', startValue: '0', hasAnyError: false, setIsPressed: false})
    //     setTurnRed(false)
    // }
    //
    // function onChangeStart(value: string) {
    //     const hasError = +value < 0
    //     setStart({...start, hasError: hasError, inputValue: value})
    //     setBothError(+value >= +max.inputValue)
    //
    //     hasAnyErrorsHandler(hasError || +value >= +max.inputValue)
    // }
    //
    // //setter

    function changeMaxValue(value: string) {
        const action = ChangeMaxValueAC(value)

        // setMax({...max, hasError: hasError, inputValue: value})
        // setBothError(+value <= +start.inputValue)
        //
        // hasAnyErrorsHandler(hasError || +value <= +start.inputValue)
    }

    //
    // let hasAnyErrors = start.hasError || max.hasError || bothError
    //
    // function isSetButtonPressed(isPressed: boolean) {
    //     getSetterParameters(max.inputValue, start.inputValue, hasAnyErrors, isPressed)
    // }

    return (
        <div className={s.counter}>

            {/*<Setter*/}
            {/*    // getSetterInputParameters={getSetterParameters}*/}
            {/*    // hasAnyErrorsHandler={hasAnyErrorsHandler}*/}
            {/*    cp={counterParams}*/}
            {/*    seCounterParams={setCounterParams}*/}
            {/*    // setButton={setState}*/}
            {/*    // inputState={inputState}*/}

            {/*/>*/}
            {/*<Incrementer*/}
            {/*    params={counterParams}*/}
            {/*    incButton={incState}*/}
            {/*    resetButton={resetState}*/}
            {/*    isIncButtonPressedHandler={isIncButtonPressedHandler}*/}
            {/*    isResetButtonPressedHandler={isResetButtonPressedHandler}*/}
            {/*    turnRed={turnRed}*/}
            {/*/>*/}
        </div>
    );
};