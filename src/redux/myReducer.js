import { UPDATE_FORMDATA } from "./actionTypes"
import { Homepage_data } from "./data/Homepage_data";


const initialState ={
    email: '',
    password: '',
    token: null ,

    homepageData:Homepage_data

}

export const myReducer = (state=initialState , action )=>{
    switch(action.type){
        
        case UPDATE_FORMDATA :
            return {
                ...state , 
            } 
        break;
         
        default:
            return state;
            break;


    }

}