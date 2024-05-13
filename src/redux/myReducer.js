import { ADD_TO_CART, DELETE_PRODUCT_FROM_CART, LOGOUT, SET_SINGLE_PRODUCT_DATA, SET_TOKEN, UPDATE_FORMDATA } from "./actionTypes"
import { saveToLocalStorage } from "./actions";
import { Homepage_data } from "./data/Homepage_data";

export const getTokenFromLocal = (key)=>{
    return JSON.parse(localStorage.getItem(key))

}


const initialState ={
    email: '',
    password: '',
    token:getTokenFromLocal('token') ? getTokenFromLocal('token') : null,


    singleProductDetails:null,
    cartData:[],

    homepageData:Homepage_data

    

}

export const myReducer = (state=initialState , action )=>{
    switch(action.type){
        
        case UPDATE_FORMDATA :
            console.log(action.payload,action.keyName)
            return {
                ...state,[action.keyName]:action.payload  
            } 
        break;
        case SET_SINGLE_PRODUCT_DATA :
            return {
                ...state,singleProductDetails:action.payload
            } 
        break;    
        case ADD_TO_CART :
            let tempCartArray
            let existingProuctFlag = false;
           
        if(state.cartData.length > 0){

             tempCartArray = state.cartData.map((item)=>{
                    if (item.structuredData.productID === action.payload.structuredData.productID) {
                        existingProuctFlag = true;
                        return {
                            ...item,p_quantity:item.p_quantity+1
                        }
                    }else{
                        return item
                    }
                })

                if(existingProuctFlag){
                    return{
                        ...state,cartData:tempCartArray
                    }
                    
                }else{
                    return{
                        ...state,cartData:[...state.cartData,{...action.payload, p_quantity:1}]
                    }
                }

                
               
        }else{
            const tempProduct = {...action.payload, p_quantity:1}
            return{
                ...state,cartData:[...state.cartData,tempProduct]
            }
        }

            return{
                ...state,cartData:tempCartArray
            }


        break; 
        
         
        case SET_TOKEN :
            return {
                ...state,token:action.payload 
            } 
        break;

        case LOGOUT :
            saveToLocalStorage('token',null)
            return {
                ...state,token:null  
            } 
        break;

        case DELETE_PRODUCT_FROM_CART :
             let tempCart = state.cartData.filter((item) => item.structuredData.productID !== action.payload);
            return {
                ...state,cartData:tempCart  
            } 
        break;        
            
        default:
            return state;
            break;

            


    }

}



// LocalStorage.setItem('key' ,JSON.stringify(data));