import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Summary() {
    const state = useSelector(function(state) {
        return state;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if(state.componentClass.classSummary === 'summaryNone') {
            document.body.style.overflow = "visible";
        }else if(state.componentClass.classSummary === 'summary') {
            document.body.style.overflow = "hidden";
        }
    }, [state.componentClass.classSummary]);

    function closeSummary() {
        dispatch({
            type: "CLASSSUMMARY",
            nameClassSummary: "summaryNone",
            nameClassOverlaySummary : "overlaySummaryNone"
        })
    }

    return (
        <>
            <div className={state.componentClass.classOverlaySummary} onClick={closeSummary} ></div>
            <div className={state.componentClass.classSummary}>
                {
                    Object.entries(state.pannier).map((value, index) => (
                        <div key={index}>
                        {(value[1].price !== 0 && value[1].price !== undefined) && (
                            <>
                            <p>{value[1].name}</p>
                            <p>{Math.round(value[1].price * 100) / 100}€</p>
                            <span>{value[1].counter}</span>
                            </>
                        )}
                            
                        </div>
                    ))
                }
                <p>Total : {Math.round(state.total.total * 100) / 100}€</p>
            </div>
        </>
    )
}