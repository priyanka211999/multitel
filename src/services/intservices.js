import { doGet, doPost, doPut,doDelete }  from "../utils/request"

export const getAllServices = async () => {
   return await doGet("api/service/getAllservice")
  }
  export const getProductsByService = async(data) =>{
    return await doPost('api/service/product/getProductsByService',data);
  }