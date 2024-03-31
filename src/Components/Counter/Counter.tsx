import React, {useState} from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";

export type ParamsType = {
    maxValue: string
    startValue: string
    hasAnyError: boolean
    setIsPressed: boolean
}

export const Counter = () => {

    const [params, setParams] = useState<ParamsType>({
        startValue: '',
        maxValue: '',
        hasAnyError: false,
        setIsPressed: false,
    })

    const [incState, setIncState] = useState(true)
    const [resetState, setResetState] = useState(true)
    const [setState, setSetState] = useState(false)
    const [inputState, setInputState] = useState(false)
    const [turnRed, setTurnRed]= useState(false)

    function getSetterParameters(maxValue: string, startValue: string, hasAnyError: boolean, setIsPressed: boolean) {
        setParams({...params, maxValue, hasAnyError: hasAnyError, startValue, setIsPressed})
        setSetState(true)
        setIncState(false)
        setResetState(false)
        setInputState(true)
    }


    function hasAnyErrorsHandler(hasAnyError: boolean) {
        setParams({...params, hasAnyError})
    }

    function isIncButtonPressedHandler(isPressed: boolean) {
        const inc = (+params.startValue + 1).toString()
        if (+inc <= +params.maxValue) {
            setParams({...params, startValue: inc})
        }
        if (+inc === +params.maxValue) {
            setIncState(true)
            setTurnRed(true)
        }
    }

    function isResetButtonPressedHandler(isPressed: boolean) {
        setSetState(false)
        setResetState(true)
        setIncState(true)
        setInputState(false)
        setParams({...params, maxValue: '2', startValue: '0', hasAnyError: false, setIsPressed: false})
        setTurnRed(false)
    }

    return (
        <div className={s.counter}>

            <Setter
                getSetterInputParameters={getSetterParameters}
                setButton={setState}
                inputState={inputState}

                hasAnyErrorsHandler={hasAnyErrorsHandler}
            />
            <Incrementer
                params={params}
                incButton={incState}
                resetButton={resetState}
                isIncButtonPressedHandler={isIncButtonPressedHandler}
                isResetButtonPressedHandler={isResetButtonPressedHandler}
                turnRed={turnRed}
            />
        </div>
    );
};