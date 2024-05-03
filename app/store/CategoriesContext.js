'use client';
import { createContext, useReducer } from "react";

export const CategoriesContext = createContext({
    isVisible: false,
    whichIsVisible: undefined,
    toggleIsVisible: ()=>{},
    changeWhichIsVisible: ()=>{},
});

function categoriesReducer(state, action){
    if(action.type === 'TOGGLE_VISIBILITY'){
        const updatedVisibility = action.payload;

        return {
            ...state,
            isVisible: updatedVisibility,
        }
    }
    if(action.type === 'CHANGE_WHICH_IS_VISIBLE'){
        let updatedWhichIsVisible = action.payload;

        if(updatedWhichIsVisible === '') return state;
        else if(updatedWhichIsVisible === 'clear') {
            return {
                ...state,
                whichIsVisible: undefined,
            }
        }

        return {
            ...state,
            whichIsVisible: updatedWhichIsVisible,
        }
    }

    return state;
}

export default function CategoriesContextProvider({children}){

    const [categoriesState, categoriesDispatch] = useReducer(
        categoriesReducer,
        {
            isVisible: false,
            whichIsVisible: undefined,
        }
    )
    
    function handleToggleVisibility(visibilityValue){
        //console.log("visibility change");
        //console.log(visibilityValue);
        categoriesDispatch({
            type: "TOGGLE_VISIBILITY",
            payload: visibilityValue
        })
    }

    function handleChangeWhichIsVisible(category){
        //console.log("handleChange");
        //console.log(category);
        categoriesDispatch({
            type: "CHANGE_WHICH_IS_VISIBLE",
            payload: category
        })
    }


    const ctxValue={
        isVisible: categoriesState.isVisible,
        whichIsVisible: categoriesState.whichIsVisible,
        toggleIsVisible: handleToggleVisibility ,
        changeWhichIsVisible: handleChangeWhichIsVisible,
    }

    return(
        <CategoriesContext.Provider value={ctxValue}>
            {children}
        </CategoriesContext.Provider>
    );
}

