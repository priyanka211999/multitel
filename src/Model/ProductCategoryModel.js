import { BaseModel } from "./BaseModel.js";

export class ProductCategoryModel extends BaseModel {
  static resource = {
    key: "ProductCategory",
    uniqueIdentifier: "id",
  };

  constructor(props) {
    super(props);
  }
}
