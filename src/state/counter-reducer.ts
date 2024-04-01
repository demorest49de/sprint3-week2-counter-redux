import {CounterParamsType} from "../Components/Counter/Counter";

export type ChangeMaxValue =
    ReturnType<typeof ChangeMaxValueAC>

type ActionType = ChangeMaxValue;


const initialState: CounterParamsType = {
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
}

export const counterReducer = (state: CounterParamsType = initialState, action: ActionType): CounterParamsType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            const hasError = +action.value < 0
            const nstate = {...state}
            nstate.max = {...nstate.max, inputValue: action.value, }
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