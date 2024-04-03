import React from "react";
import s from "./CounterApp.module.css";
import {SetterPanel} from "./components/SetterPanel/SetterPanel";
import {ScorePanel} from "./components/ScorePanel/ScorePanel";




function CounterApp() {

    return (
        <div className={s.counterApp}>
            <div className={s.counter}>

                <SetterPanel/>

             {/*   <ScorePanel/>*/}
            </div>
        </div>
    );
}

export default CounterApp;

//TODO useSelector - минус лишние пропсы - done
//TODO - избавиться от лишн состояний (репозиторий) -
//TODO - проверка  на целое число, поставить ограничение  по величине числа
//TODO - как правильно доставать селектором переменные (репозиторий - 13 - 15 строка)
//TODO - ипользовать memo(), useMemo(), useCallback()
 