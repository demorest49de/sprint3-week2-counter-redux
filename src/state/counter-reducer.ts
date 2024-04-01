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
    hasAnyError: false,
    setButtonisPressed: false,
    incButtonisPressed: true,
    resetButtonisPressed: true,
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
    bothError: false
}

export const counterReducer = (state: CounterParamsType = initialState, action: ActionType): CounterParamsType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            const hasError = +action.value < 0
            const nstate = {...state}
            nstate.max = {...nstate.max, inputValue: action.value, hasError}
            nstate.bothError = (+action.value <= +nstate.start.inputValue);
            return nstate;
        }
        case 'CHANGE-START-VALUE': {
            const hasError = +action.value < 0
            const nstate = {...state}
            nstate.start = {...nstate.start, inputValue: action.value, hasError}
            nstate.bothError = (+action.value >= +nstate.max.inputValue);
            return nstate;
        }
        case 'INCREMENT-BUTTON-PRESSED': {
            const nstate = {...state}

            const inc = (+nstate.startValue + 1)
            if (inc <= +nstate.maxValue) {
                nstate.startValue = inc.toString()
            }
            if (inc === +nstate.maxValue) {
                nstate.incButtonisPressed = true
                nstate.turnRed = true
            }

            return nstate;
        }
        case 'SET-BUTTON-PRESSED': {
            const nstate = {...state}
            nstate.setButtonisPressed
            //getSetterParameters(max.inputValue, start.inputValue, hasAnyErrors, isPressed)
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