import axios from "axios"
import { ADD_TO_CART, SET_SINGLE_PRODUCT_DATA } from "./actionTypes"

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