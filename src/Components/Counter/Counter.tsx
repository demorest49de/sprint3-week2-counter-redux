import React from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    IncrementButtonIsPressedAC,
    SetButtonIsPressedAC
} from "../../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export type CounterParamsType = {
    maxValue: string
    startValue: string

    hasErrorGlobal: boolean
    setButtonDisabled: boolean
    incButtonDisabled: boolean
    resetButtonDisabled: boolean

    setState: boolean
    inputIsDisabled: boolean
    turnRed: boolean

    start: StartValueType
    max: MaxValueType
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

    // function isResetButtonPressedHandler(isPressed: boolean) {
    //     setSetState(false)
    //     setResetState(true)
    //     setIncState(true)
    //     setInputState(false)
    //     seCounterParams({...counterParams, maxValue: '2', startValue: '0', hasAnyError: false, setIsPressed: false})
    //     setTurnRed(false)
    // }

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
                // isResetButtonPressedHandler={isResetButtonPressedHandler}
            />
        </div>
    );
};