import { doGet, doPost, doPut,doDelete }  from "../utils/request"

 export const imageUrl =  (imagePath)  => {
    return (`http://50.28.104.48:3003/images/${imagePath}`)
 }

export const getAllCategories = async () => {
   return await doGet("api/product/getAllCategory")
  }
  export const getAddCategory= async(data) =>{
    return await doPost('api/product/addCategory',data);
  }
  export const getEditCategory = async(data) =>{
    return await doPut('api/product/editCategory',data);
  }
  export const getDeleteCategory = async(data) =>{
    return await doDelete('api/product/deleteCategory',data);
  }
  
//Product APIS 
  export const getAllProducts = async () => {
    return await doGet("api/product")
   }

   export const getLatestProducts = async () => {
    return await doGet("api/product/getLatestProducts")
   }

   export const getAddProduct= async(data) =>{
     return await doPost('api/product/add',data);
   }
   export const getEditProduct = async(data) =>{
     return await doPut('api/product/edit',data);
   }
   export const getDeleteProduct = async(data) =>{
     return await doDelete('api/product/delete',data);
   }

   export const getProductsByCategory = async(data) =>{
     return await doPost('api/product/getProductsByCategory',data)
   }

   export const getProductBySlug = async(data) =>{
    return await doPost('api/product/getProductBySlug',data)
  }

   //promotions
   export const getAllPromotions = async () => {
    return await doGet("api/promotion/getAllpromotions")
   }
   export const getAddPromotion = async(data) =>{
     return await doPost('api/promotion/addpromotions',data);
   }
   export const getEditPromotion = async(data) =>{
     return await doPut('api/promotion/editpromotions',data);
   }
   export const getDeletePromotion = async(data) =>{
     return await doDelete('api/promotion/deletepromotions',data);
   }

  //  export const getProductsByCategory = async(data) =>{
  //    return await doPost('api/product/getProductsByCategory',data)
  //  }

  export const getAllInternetServices = async () => {
    return await doGet("api/service/getAllservice")
   }
   export const getAddServices = async(data) =>{
     return await doPost('api/service/addservice',data);
   }
   export const getEditServices = async(data) =>{
     return await doPut('api/service/editservice',data);
   }
   export const getDeleteServices = async(data) =>{
     return await doDelete('api/service/deleteservice',data);
   }

   export const getAllServicesProducts = async () => {
    return await doGet("api/service/product")
   }
   export const getAddServiceProducts = async(data) =>{
     return await doPost('api/service/product/add',data);
   }
   export const getEditServiceProducts = async(data) =>{
     return await doPut('api/service/product/edit',data);
   }
   export const getDeleteServiceProducts = async(data) =>{
     return await doDelete('api/service/product/delete',data);
   }

   export const getAllCms = async () => {
    return await doGet("api/cms/getAllCms")
   }
   export const getAllApprovedCms = async (data) => {
    return await doPost("api/cms",data)
   }
   export const getAddcms = async(data) =>{
     return await doPost('api/cms/add',data);
   }
   export const getEditcms = async(data) =>{
     return await doPut('api/cms/edit',data);
   }
   export const getDeletecms = async(data) =>{
     return await doDelete('api/cms/delete',data);
   }
  //contacts

  export const getAddVendor = async(data) =>{
    return await doPost('api/vendor/createVendor',data);
  }
  export const getEditVendor = async(data) =>{
    return await doPut('api/vendor/updateVendor',data);
  }
  export const getDeleteVendor = async(data) =>{
    return await doDelete('api/vendor/deleteVendor',data);
  }
  export const getAllVendors = async (data) => {
    return await doPost("api/vendor/getVendors",data)
   }



 
