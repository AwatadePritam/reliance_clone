import axios from "axios"
import { ADD_TO_CART, DELETE_PRODUCT_FROM_CART, LOGOUT, SET_SINGLE_PRODUCT_DATA, SET_TOKEN, UPDATE_FORMDATA } from "./actionTypes"

export const saveToLocalStorage = (key, data ) =>{
     localStorage.setItem(key,JSON.stringify(data));
}

export const setSingleProductData = (data) =>{
    return {
        type:SET_SINGLE_PRODUCT_DATA,payload:data
    }
}

export const fetchSingleProductDetails = (productId) =>{
    return async (dispatch)=>{
        axios.get(`https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productPage&pageId=productPage&productCode=${productId}`)
        .then((response)=>{
            // console.log(response.data.data);
            dispatch(setSingleProductData(response.data.data))
        })
        .catch((error)=>{
            console.log(error)
        });
    }
}

export const addToCart = (item) =>{

    return {
        type:ADD_TO_CART,payload:item
    }
}

export const updateFormData = (data , keyName) =>{
        return {
            type:UPDATE_FORMDATA, payload:data ,keyName:keyName
        }
}

export const settoken = (token) =>{
    return {
            type:SET_TOKEN, payload:token
    }

}

export const login = (formDataObject)=>{
        return async (dispatch) => {
            axios.post('https://reqres.in/api/login',formDataObject)
            .then((response)=>{
                dispatch(settoken(response.data.token))
                saveToLocalStorage('token' , response.data.token)
            })
            .catch((error)=>{

            })

        }

}

export const deleteProductFromCart = (productId) =>{
    return{
        type:DELETE_PRODUCT_FROM_CART,payload:productId
    }
}

export const logout = () =>{
     return {
        type:LOGOUT
     }
}

