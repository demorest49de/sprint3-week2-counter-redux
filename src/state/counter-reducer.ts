import {CounterParamsType} from "../Components/Counter/Counter";

export type ChangeMaxValueType =
    ReturnType<typeof ChangeMaxValueAC>

export type ChangeStartValueType =
    ReturnType<typeof ChangeStartValueAC>

export type IncrementButtonIsPressedType =
    ReturnType<typeof IncrementButtonIsPressedAC>

export type SetButtonIsPressedType =
    ReturnType<typeof SetButtonIsPressedAC>

type ActionType =
    ChangeMaxValueType
    | ChangeStartValueType
    | IncrementButtonIsPressedType
    | SetButtonIsPressedType
    ;


const initialState: CounterParamsType = {
    maxValue: '',
    startValue: '',
    
    hasErrorGlobal: false,

    setButtonDisabled: false,
    incButtonDisabled: true,
    resetButtonDisabled: true,

    setState: false,
    disabledState: false,
    turnRed: false,
    start: {
        inputValue: '0',
        hasError: false,
    },
    max: {
        inputValue: '2',
        hasError: false,
        focus: true
    },
}

export const counterReducer = (state: CounterParamsType = initialState, action: ActionType): CounterParamsType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            const nstate = {...state}
            const hasError =
                (+action.value < 0)
                || (+nstate.start.inputValue < 0)
                || (+action.value <= +nstate.start.inputValue)
            nstate.hasErrorGlobal = hasError
            nstate.max = {...nstate.max, inputValue: action.value, hasError}
            nstate.start = {...nstate.start, hasError}
            return nstate;
        }
        case 'CHANGE-START-VALUE': {
            const nstate = {...state}
            const hasError =
                (+action.value < 0)
                || (+action.value >= +nstate.max.inputValue)
            nstate.hasErrorGlobal = hasError
            nstate.start = {...nstate.start, inputValue: action.value, hasError}
            nstate.max = {...nstate.max, hasError}
            return nstate;
        }
        case 'INCREMENT-BUTTON-PRESSED': {
            const nstate = {...state}

            const inc = (+nstate.startValue + 1)
            if (inc <= +nstate.maxValue) {
                nstate.startValue = inc.toString()
            }
            if (inc === +nstate.maxValue) {
                nstate.incButtonDisabled = true
                nstate.turnRed = true
            }

            return nstate;
        }
        case 'SET-BUTTON-PRESSED': {
            const nstate = {...state}
            nstate.setButtonDisabled = true
            return nstate;
        }
        default: {
            return state;
        }
    }
}

export const ChangeMaxValueAC = (value: string) => {
    return {type: 'CHANGE-MAX-VALUE', value} as const
}

export const ChangeStartValueAC = (value: string) => {
    return {type: 'CHANGE-START-VALUE', value} as const
}

export const IncrementButtonIsPressedAC = () => {
    return {type: 'INCREMENT-BUTTON-PRESSED'} as const
}

export const SetButtonIsPressedAC = () => {
    return {type: 'SET-BUTTON-PRESSED'} as const
}