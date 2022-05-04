import { BaseModel } from "./BaseModel"

export class ProductModel extends BaseModel {
  static resource = {
    key: "Product",
    uniqueIdentifier: "id",
  };

  constructor(props) {
    super(props);
  }
}
