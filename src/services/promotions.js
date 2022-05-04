import { doGet, doPost, doPut,doDelete }  from "../utils/request"

//  export const imageUrl =  (imagePath)  => {
//     return (`http://159.65.145.21:3003/images/${imagePath}`)
//  }

export const getAllPromotions = async () => {
   return await doGet("api/promotion/getAllpromotions")
  }
  export const getPromotionBySlug = async(data) =>{
    return await doPost('api/promotion/getPromotionsBySlug',data);
  }
//   export const getEditCategory = async(data) =>{
//     return await doPut('api/product/editCategory',data);
//   }
//   export const getDeleteCategory = async(data) =>{
//     return await doDelete('api/product/deleteCategory',data);
//   }
  
// //Product APIS 
//   export const getAllProducts = async () => {
//     return await doGet("api/product")
//    }
//    export const getAddProduct= async(data) =>{
//      return await doPost('api/product/add',data);
//    }
//    export const getEditProduct = async(data) =>{
//      return await doPut('api/product/edit',data);
//    }
//    export const getDeleteProduct = async(data) =>{
//      return await doDelete('api/product/delete',data);
//    }

//    export const getProductsByCategory = async(data) =>{
//      return await doPost('api/product/getProductsByCategory',data)
//    }

 
