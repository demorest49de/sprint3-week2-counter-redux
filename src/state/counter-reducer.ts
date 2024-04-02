import {CounterParamsType, Status, StatusType} from "../components/Counter/Counter";

const INC = 'INC'
const RESET = 'RESET'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_SET = 'SET_SET'
const SET_ERROR = 'SET_ERROR'
const SET_COUNTER = 'SET_COUNTER'

export type IncAT =
    ReturnType<typeof IncAC>

export type ResetAT =
    ReturnType<typeof ResetAC>

export type SetMaxAT =
    ReturnType<typeof SetMaxAC>

export type SetStartAT =
    ReturnType<typeof SetStartAC>

export type SetSetAT =
    ReturnType<typeof SetSetAC>

export type SetErrorAT =
    ReturnType<typeof SetErrorAC>

export type SetCounterAT =
    ReturnType<typeof SetCounterAC>

type ActionType =
    IncAT
    | ResetAT
    | SetMaxAT
    | SetStartAT
    | SetSetAT
    | SetErrorAT
    | SetCounterAT
    ;


const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 2,
    status: Status.settings as StatusType
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_MAX_VALUE: {
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
        case SET_START_VALUE: {
            const nstate = {...state}
            const hasError =
                (+action.value < 0)
                || (+action.value >= +nstate.max.inputValue)
            nstate.hasErrorGlobal = hasError
            nstate.start = {...nstate.start, inputValue: action.value, hasError}
            nstate.max = {...nstate.max, hasError}
            return nstate;
        }
        case INC: {
            const nstate = {...state}

            const inc = (+nstate.start.inputValue + 1)
            if (inc <= +nstate.max.inputValue) {
                nstate.start.inputValue = inc.toString()
            }
            if (inc === +nstate.max.inputValue) {
                nstate.incButtonDisabled = true
            }

            return nstate;
        }
        case SET_SET: {
            const nstate = {...state}
            nstate.setButtonDisabled = true
            nstate.inputIsDisabled = true
            nstate.incButtonDisabled = false
            nstate.resetButtonDisabled = false
            return nstate;
        }
        case RESET: {
            const nstate = {...state}
            nstate.setButtonDisabled = false
            nstate.inputIsDisabled = false
            nstate.max.inputValue = '2'
            nstate.start.inputValue = '0'
            nstate.incButtonDisabled = true
            nstate.resetButtonDisabled = true
            return nstate;
        }
        default: {
            return state;
        }
    }
}

export const IncAC = () => {
    return {type: INC} as const
}

export const ResetAC = () => {
    return {type: RESET} as const
}

export const SetMaxAC = (value: string) => {
    return {type: SET_MAX_VALUE, value} as const
}

export const SetStartAC = (value: string) => {
    return {type: SET_START_VALUE, value} as const
}

export const SetSetAC = () => {
    return {type: SET_SET} as const
}

export const SetErrorAC = () => {
    return {type: RESET} as const
}

export const SetCounterAC = () => {
    return {type: RESET} as const
}