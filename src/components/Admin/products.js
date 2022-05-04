import React, { useState, useEffect } from "react";
import data from "../../Data";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import moment from "moment";
import {
  getAddProduct,
  getDeleteProduct,
  getAllProducts,
  getEditProduct,
  getAllCategories,imageUrl
} from "../../services/category";
import ProductsList from "../ProductsList";

function Products() {
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const[deleteRecord,setDeleteRecord]=useState("")
  const handleEditClose = () => setShowEditModal(false);
  const handlecloseDelete = () => setDeleteShow(false);
  const [productList, setProductList] = useState("");
  const[allcategories,setAllcategories]=useState('')

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [file, setFile] = useState([]);
  const [data2, setData2] = useState({
    id: "",
    productName: "",
    category: "",
    quantity: "",
    date: "",
    availability: "",
    price: "",
    discount: "",
    warranty: "",
    description: "",
    offers: "",
    details: "",
  });

  const {
    id,
    productName,
    category,
    quantity,
    date,
    availability,
    price,
    discount,
    warranty,
    description,
    offers,
    details,
  } = data2;
  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  // Edit Api
  const handleEditShow = (item) => {
    console.log(allcategories, "allcategories");
    setData2({
      id:item.id,
      productName: item.name,
      category: item.product_category ? item.product_category.name:'',
      quantity: item.quantity,
      date: moment(item.date).format("YYYY-MM-DD"),
      availability: item.availability,
      price: item.price,
      discount: item.discountPrice,
      warranty: item.warranty,
      description: item.description,
      offers: item.offer,
      details: item.specification,
    });
    setShowEditModal(true);
  };
  const handleEditProduct = async () => {
    let categoryId = ''
    {allcategories &&
      allcategories.map((item) => {
        if(item.name === category){
          categoryId = item.id
        }
      })
      }
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
      data.append("description", description);
      data.append("name", productName);
      data.append("id",id);
      data.append("quantity", quantity);
      data.append("price", price);
      data.append("category_id",categoryId)
      // data.append("slug","test-product 2")
   
    try {
      await getEditProduct(data);
      alert("Category Edited Sucessfully");
      setShowEditModal(false);
      handleAllProducts();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  const handleAllCategories = async () => {
    try {
      const resp = await getAllCategories();
      setAllcategories(resp.data)
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  const handleAllProducts = async () => {
    try {
      const resp = await getAllProducts();
      setProductList(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error); 
      alert("something went Wrong");
    }
  };
  useEffect(() => {
    handleAllProducts();
    handleAllCategories()
  }, []);
//delete APi
  const handleDeleteshow = (item) => {
     setDeleteShow(true);
     setDeleteRecord(item)
}

  const handleDeleteProduct = async () => {
    console.log("dr",deleteRecord)
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteProduct(data);
      alert("Product Deleted Sucessfully");
      setDeleteShow(false);
      handleAllProducts();
    } catch (error) {
      console.log("error", error);
      alert("Something Went Wrong");
    }
  };

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
      <div class="row d-flex align-items-center justify-content-between">
         <div class="col-lg-6 col-md-6 text-left">
          <h3 className="mt-4 mb-4">Products</h3>
          </div>
          <div className="col-lg-6 col-md-6 text-right">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{ backgroundColor: "#0076B5" }}
                onClick={() => navigate("/admin/products/newproduct")}
              >
                <i className="fas fa-plus-circle"></i> Add New Product
              </button>
            </div>
          </div>
        </div>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>category</th>
              <th>Quantity</th>
              <th>Specifications</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList &&
              productList.map((item, i) => (
                <tr>
                  {console.log("hxwjh", productList)}
                  <td>{i + 1}</td>
                  <td>{item ? item.name : ""}</td>
                  <td>
                    <img
                      src={imageUrl(item.cover_img)}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>
                    {item.product_category ? item.product_category.name : ""}
                  </td>
                  <td>{item ? item.quantity : ""}</td>
                  <td>{item ? item.description : ""}</td>
                  <td>{item ? item.price : ""}</td>
                  <td>
                    <a
                      className="nav-link"
                      onClick={() => {
                        handleDeleteshow(item);
                      }}
                    >
                      {" "}
                      <i className="fa fa-trash-o" />
                    </a>
                    <a
                      className="nav-link"
                      onClick={() => {
                        handleEditShow(item);
                      }}
                    >
                      <i className="fa fa-edit" />
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {/* Delete Modal */}

      <Modal show={DeleteShow} onHide={handlecloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this product</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteProduct()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="col-xl-5  col-lg-4 col-md-3 col-sm-2">
        <div className="header">
          <Modal show={ShowEditModal} onHide={handleEditClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#8ec131", marginLeft: "25px" }}>
                Edit product List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      name="productName"
                      value={productName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      category
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="category"
                      value={category}
                      onChange={handleChange}
                    >
                      <option>select the category</option>
                      {console.log("A;;",allcategories)}
                      {allcategories &&
                        allcategories.map((item) => (
                          <option value={item.name? item.name : ""}>{item? item.name : ""}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      name="quantity"
                      value={quantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext">
                      Date of Manufacturing
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      value={date}
                      name="date"
                      id="example-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Availabilty
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={availability}
                      name="availability"
                      onChange={handleChange}
                    >
                      <option>Select Option</option>
                      <option>Available</option>
                      <option>Out Of Stock</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      price
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      min={0}
                      id=""
                      name="price"
                      value={price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Discount Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      id=""
                      name="discount"
                      value={discount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Warranty
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      id=""
                      name="warranty"
                      value={warranty}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id=""
                      name="description"
                      value={description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext" className="mb-1">
                      offers
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id=""
                      name="offers"
                      value={offers}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext">product Details</label>
                    <textarea
                      className="form-control"
                      type="text"
                      value={details}
                      name="details"
                      id="example-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputtext">product Image</label>
                    <input
                      className="form-control"
                      type="file"
                      name="proimage"
                      id="proimage"
                      accept="image/png, image/jpeg"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <button
                className="btn btn-primary w-100 mt-4 ml-0"
                name="submit"
                type="submit"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                 onClick={handleSubmit}
              >
                submit
              </button>
            </div> */}
                <label style={{ color: "red", justifyContent: "center" }}>
                  {errorMsg}
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                size="lg"
                onClick={handleEditProduct}
                style={{ width: "200%" }}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Products;
