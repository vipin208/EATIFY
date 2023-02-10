export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}
// decrement item
export const REMOVE=(iteam)=>{
    return{
        type:"RMV_ONE",
        payload:iteam
    }
}

//remove items
export const DLT=(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}