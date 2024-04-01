import React, {useState} from 'react';
import s from './Counter.module.css'
import {Incrementer} from "../Incrementer/Incrementer";
import {Setter} from "../Setter/Setter";


type SetterParamsType = {
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

    const [setterParams, setSetterParams] = useState<SetterParamsType>({
        maxValue: '',
        startValue: '',
        hasAnyError: false,
        setIsPressed: false,
        incState: true,
        resetState: true,
        setState: false,
        inputState: false,
        turnRed: false,
        start: {
            name: 'start',
            inputValue: '0',
            hasError: false,
        },
        max: {
            name: 'max',
            inputValue: '2',
            hasError: false,
            focus: true
        },
        bothError: false
    })

    // const [incState, setIncState] = useState(true)
    // const [resetState, setResetState] = useState(true)
    // const [setState, setSetState] = useState(false)
    // const [inputState, setInputState] = useState(false)
    // const [turnRed, setTurnRed]= useState(false)

    // const [start, setStart]
    //     = useState<ValueType>(
    //     {
    //
    //     }
    // )
    //
    // const [max, setMax]
    //     = useState<ValueType>(
    //     {
    //
    //     }
    // )

    const [bothError, setBothError]
        = useState(false)

    function getSetterParameters(maxValue: string, startValue: string, hasAnyError: boolean, setIsPressed: boolean) {
        setSetterParams({...setterParams, maxValue, hasAnyError: hasAnyError, startValue, setIsPressed})
        setSetState(true)
        setIncState(false)
        setResetState(false)
        setInputState(true)
    }


    function hasAnyErrorsHandler(hasAnyError: boolean) {
        setSetterParams({...setterParams, hasAnyError})
    }

    function isIncButtonPressedHandler(isPressed: boolean) {
        const inc = (+setterParams.startValue + 1).toString()
        if (+inc <= +setterParams.maxValue) {
            setSetterParams({...setterParams, startValue: inc})
        }
        if (+inc === +setterParams.maxValue) {
            setIncState(true)
            setTurnRed(true)
        }
    }

    function isResetButtonPressedHandler(isPressed: boolean) {
        setSetState(false)
        setResetState(true)
        setIncState(true)
        setInputState(false)
        setSetterParams({...setterParams, maxValue: '2', startValue: '0', hasAnyError: false, setIsPressed: false})
        setTurnRed(false)
    }

    function onChangeStart(value: string) {
        const hasError = +value < 0
        setStart({...start, hasError: hasError, inputValue: value})
        setBothError(+value >= +max.inputValue)

        hasAnyErrorsHandler(hasError || +value >= +max.inputValue)
    }

    function onChangeMax(value: string) {
        const hasError = +value < 0
        setMax({...max, hasError: hasError, inputValue: value})
        setBothError(+value <= +start.inputValue)

        hasAnyErrorsHandler(hasError || +value <= +start.inputValue)
    }

    let hasAnyErrors = start.hasError || max.hasError || bothError

    function isSetButtonPressed(isPressed: boolean) {
        getSetterParameters(max.inputValue, start.inputValue, hasAnyErrors, isPressed)
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
                params={setterParams}
                incButton={incState}
                resetButton={resetState}
                isIncButtonPressedHandler={isIncButtonPressedHandler}
                isResetButtonPressedHandler={isResetButtonPressedHandler}
                turnRed={turnRed}
            />
        </div>
    );
};