import React, {useCallback, useEffect} from 'react';
import {FieldSet} from "../FieldSet/FieldSet";
import {Input} from '../Input/Input';
import {Button} from "../Button/Button";
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {firstGradient, secondGradient} from '../Gradient/GradientTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../state/store";
import {SetErrorAC, SetMaxAC, StatusType} from "../../state/counter-reducer";


export const SetterPanel = () => {

        const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
        const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
        const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
        const dispatch = useDispatch()
        console.log(' status: ', status);
        console.log(' maxValue: ', maxValue);

        useEffect(() => {
            (maxValue <= startValue || startValue < 0 || maxValue <= 0) && dispatch(SetErrorAC())
        }, [status, maxValue, startValue])

        const changeMaxValue = (value: number) => {
            console.log(' value: ', value);
            if (value > 99) {
                return dispatch(SetMaxAC(99))
            }
            if (value <= -10) {
                return dispatch(SetMaxAC(1))
            }

            dispatch(SetMaxAC(value))
        }


        return (
            <MainBlockStyled
                isSetter={true}
            >
                <GradientWrapperStyled>
                    <FieldSet
                        gradient={firstGradient}
                        hasToBeMargin={true}
                        inputFieldSet={false}
                    >
                        <Input
                            name={'max'}
                            focus={true}
                            inputValue={maxValue}
                            hasError={maxValue <= startValue || maxValue <= 0}
                            callback={changeMaxValue}
                        />
                        {/*    <Input*/}
                        {/*        name={'start'}*/}
                        {/*        inputValue={cp.start.inputValue}*/}
                        {/*        hasError={cp.start.hasError}*/}
                        {/*        onChangeStart={changeStartValue}*/}
                        {/*        disabledState={cp.inputIsDisabled}*/}
                        {/*    />*/}
                        {/*</FieldSet>*/}
                        {/*<FieldSet gradient={secondGradient}*/}
                        {/*          buttonFieldSet={true}*/}
                        {/*>*/}
                        {/*    <Button*/}
                        {/*        name={'set'}*/}
                        {/*        setButtonHandler={setButtonHandler}*/}
                        {/*        disabled={cp.hasErrorGlobal || cp.setButtonDisabled}*/}
                        {/*    />*/}
                    </FieldSet>
                </GradientWrapperStyled>
            </MainBlockStyled>
        );
    }
;