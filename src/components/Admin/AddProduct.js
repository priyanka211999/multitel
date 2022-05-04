import React,{useEffect, useState} from "react";
import data from "../../Data"
import { useNavigate } from "react-router-dom";
import {getAddProduct, getAllCategories} from "../../services/category"


function AddProduct() {
    const[errorMsg,setErrorMsg]=useState('')
    const[categoryList,setcategoryList]=useState('')
    const[file,setFile]=useState([])
    const navigate = useNavigate()
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
    console.log("target",e.target)
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const handleSubmit = async () =>{
    let categoryId = ''
    {categoryList &&
      categoryList.map((item) => {
        if(item.name === category){
          categoryId = item.id
          console.log("tem.id")
        }
      })
      }
      const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
      data.append("description",description)
      data.append("name",productName)
      data.append("availability",availability)
      data.append("product_category",category)
      data.append("warranty",warranty)
      data.append("details",details)
      data.append("quantity",quantity)
      data.append("price",price)
      data.append("category_id",categoryId)
    }
      if(
      productName === "" ||
      availability === "" ||
      category === "" ||
      description === "" ||
      warranty === "" ||
      details === "" ||
      quantity === "" ||
      price === "" ||
      date === "" ||
      details === "" ||
      file === ""
      )
      {
          setErrorMsg("please Fill the Required Data")
      }
      else{
      try {
        await getAddProduct(data)
          alert("Added Product.", "success");
          handleAllCategories()
          navigate('/admin/products')
        } catch (error) {
          alert("something Went Wrong", "error");
        } finally {
          setErrorMsg('')
          // console.log("Dtaa",data2,file)
          setData2({
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
          details: ""
        })
          setFile([''])
      }
    }

  }

  const handleAllCategories = async () => {
    try {
      const resp = await getAllCategories();
      setcategoryList(resp && resp.data);
      console.log(resp,"respp")
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    }
  };

  useEffect(() => {
    handleAllCategories()
  }, []);


  return (
    <div>
      <div
        className="row d-flex align-items-center justify-content-between"
        style={{ paddingTop: "10px" }}
      >
        <div className="col-12 text-left">
          <h3 className="mt-0 mb-4">
            <a className="text-black" onClick={()=>navigate("/admin/products")}>
              <i className="fas fa-long-arrow-alt-left"></i>
            </a>{" "}
            Add New Product
          </h3>
        </div>
      </div>

      <div className="detail-box">
        <div className="card-body form-custom">
          <div className="row">
            {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="exampleInputtext" className="mb-1">
                  Product ID :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="id"
                     value={id}
                     onChange={handleChange}
                />
              </div>
            </div> */}
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
                  Category
                </label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="category"
                   value={category}
                  onChange={handleChange}
                >
                  {console.log("cl",categoryList)}
                  <option>select the category</option>
                  {categoryList &&
                 categoryList.map((item) => (
                   
                   <option value={item.name}>{item.name}</option>
                   
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
                <label htmlFor="exampleInputtext">Date of Manufacturing</label>
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
                  Price
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
                  Offers
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
                <label htmlFor="exampleInputtext">Product Image</label>
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

            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <button
                className="btn btn-primary w-100 mt-4 ml-0"
                name="submit"
                type="submit"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                 onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <label style={{ color: "red", justifyContent: "center" }}>
              {errorMsg}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
