import React from 'react';
import {GradientWrapperStyled} from "../GradientWrapper/GradientWrapperStyled";
import {MainBlockStyled} from "../MainBlock/MainBlockStyled";
import {FieldSet} from "../FieldSet/FieldSet";
import {firstGradient, secondGradient} from "../Gradient/GradientTypes";
import {Button} from "../Button/Button";
import {SpanStyled} from "./SpanStyled";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../state/store";
import {StatusType} from "../../state/counter-reducer";


// import {StatusType} from "../../state/counter-reducer";


export const ScorePanel = () => {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
    const dispatch = useDispatch()

    return (<></>
        // <MainBlockStyled
        //     isIncrementer={true}
        // >
        //     <GradientWrapperStyled>
        //         <FieldSet gradient={secondGradient}
        //                   inputFieldSet={true}
        //                   hasToBeMargin={true}
        //         >
        //             <SpanStyled
        //                 isNumber={cp.setButtonDisabled}
        //                 isErrorText={cp.hasErrorGlobal}
        //                 turnRed={cp.start.inputValue
        //                     === cp.max.inputValue}
        //             >
        //                 {cp.setButtonDisabled ?
        //                     cp.start.inputValue :
        //                     (cp.hasErrorGlobal ?
        //                         'Incorrect value!' :
        //                         'enter values and press \'set\'')
        //                 }
        //             </SpanStyled>
        //         </FieldSet>
        //         <FieldSet gradient={firstGradient}
        //                   buttonFieldSet={true}
        //         >
        //             <Button
        //                 name={'inc'}
        //                 incrementButtonHandler={incrementButtonHandler}
        //                 disabled={cp.incButtonDisabled}/>
        //             <Button
        //                 name={'reset'}
        //                 resetButtonHandler={resetButtonHandler}
        //                 disabled={cp.resetButtonDisabled}/>
        //         </FieldSet>
        //     </GradientWrapperStyled>
        // </MainBlockStyled>
    );
};