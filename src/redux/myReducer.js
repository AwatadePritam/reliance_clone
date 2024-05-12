import { ADD_TO_CART, SET_SINGLE_PRODUCT_DATA, UPDATE_FORMDATA } from "./actionTypes"
import { Homepage_data } from "./data/Homepage_data";


const initialState ={
    email: '',
    password: '',
    token: null ,

    singleProductDetails:null,
    cartData:[],

    homepageData:Homepage_data

}

export const myReducer = (state=initialState , action )=>{
    switch(action.type){
        
        case UPDATE_FORMDATA :
            return {
                ...state , 
            } 
        break;
        case SET_SINGLE_PRODUCT_DATA :
            return {
                ...state,singleProductDetails:action.payload
            } 
        break;    
        case ADD_TO_CART :
            console.log('demo')
            let tempCartArray
           
        if(state.cartData.length > 0){
             tempCartArray = state.cartData.map((item)=>{
                console.log(action.payload.structuredData.productID)
                    if (item.structuredData.productID === action.payload.structuredData.productID) {
                        console.log('2nd time')
                        return {
                            ...item,p_quantity:item.p_quantity+1
                        }
                    } else {
                        console.log('first time')
                        return{
                            ...item,p_quantity:1
    
                        }
                    }
                }) 
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
            
        default:
            return state;
            break;


    }

}