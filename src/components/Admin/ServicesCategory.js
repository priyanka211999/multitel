import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import data from "../../Data";
import { useSelector } from "react-redux";
import {
    getAllInternetServices,
    getAddServices,
    getEditServices,
    getDeleteServices,imageUrl
} from "../../services/category";
import { Link } from "react-router-dom";

function ServiceCategories() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [servicesList, setServicesList] = useState("");
 


  const [data2, setData2] = useState({
    id: "",
    name: "",
    description: "",
    slug: "",
    subHeading:"",
    SubDescription:'',
    sortDescription:''
  });
  const { id, name, slug, description,subHeading,sortDescription } = data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleDeleteProduct = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeleteServices(data);
      alert("Category Deleted Sucessfully");
      setDeleteShow(false);
      handleAllServices();
    } catch (error) {
      console.log("error", error);
      alert("Something Went Wrong");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
      data.append("description", description);
      data.append("title", name);
      data.append("name", subHeading);
      data.append("sort_description", sortDescription);
   

    if (name === "" || description === "" || file === "") {
      setErrorMsg("Fill the Mandatory Filelds");
    } else
      try {
        await getAddServices(data);
        alert("Added  Service.", "success");
        setData2('')
        setFile('')
        setShow(false);
        handleAllServices();
      } catch (error) {
        alert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //  edit API
  const handleEditShow = (item) => {
    setData2({
      id: item.id,
      name: item.title,
      description: item.description,
      sortDescription:item.sort_description,
      subHeading:item.name

    });
    setShowEditModal(true);
  };
  const handleEditProduct = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
      data.append("description", description);
      data.append("title",name);
      data.append("id", id);
      data.append("name", subHeading);
      data.append("sort_description", sortDescription);
   

   
    try {
      await getEditServices(data);
      alert("Category Edited Sucessfully");
      setData2(" ")
      setFile(' ')
      setShowEditModal(false);
      handleAllServices();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };
  const handleEditClose = () => {
    setData2(' ')
    setShowEditModal(false);
  };

  //Get All Category Api

  const handleAllServices = async () => {
    try {
      let tableDataArr = [];
      const resp = await getAllInternetServices();
      setServicesList(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    }
  };

  useEffect(() => {
    handleAllServices();
  }, []);

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
      <div class="row d-flex align-items-center justify-content-between">
         <div class="col-lg-6 col-md-6 text-left">
          <h3 className="mt-4 mb-4">Service Categories</h3>
          </div>
          <div className="col-lg-6 col-md-6 text-right">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{
                  // marginRight: "15px",
                  backgroundColor: "#0076B5",
                  marginTop: "30px !important",
                }}
                onClick={handleShow}
              >
                <i className="fas fa-plus-circle"></i> Add New Category
              </button>
              <Modal show={show} onHide={handleClose} className="add_cat_modal">
                {/* <Modal.Header closeButton>
                  <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                    Add New Category
                  </Modal.Title>
                </Modal.Header> */}

                <Modal.Body>
                  <button
                    type="button"
                    className="close"
                    onClick={handleClose}
                    style={{ position: "absolute", top: "5px", right: "10px" }}
                  >
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                  </button>
                  <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                    Add New Service
                  </Modal.Title>
                  <div className="container">
                    <Form.Group>
                      <Form.Label>Service Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleChange}
                      ></Form.Control>
                       <Form.Label>Sub Heading</Form.Label>
                      <Form.Control
                        type="text"
                        value={subHeading}
                        name="subHeading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Sort Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={sortDescription}
                        name="sortDescription"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Upload Icon</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                      ></Form.Control>
                    </Form.Group>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSubmit}
                    style={{ width: "200%" }}
                  >
                    Submit
                  </Button>

                  <label style={{ color: "red", justifyContent: "center" }}>
                    {errorMsg}
                  </label>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {servicesList &&
              servicesList.map((item, i) => (
                <tr>
                  {console.log("pc", servicesList)}

                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={imageUrl(item.image)}
                      style={{ width: "60px" }}
                    />
                  </td>
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
          <Modal.Title style={{ color: "#0076B5" }}>Delete Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this Category ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDeleteProduct(deleteRecord)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <div className="col-xl-5  col-lg-4 col-md-3 col-sm-2">
        <div className="header">
          <Modal show={ShowEditModal} onHide={handleEditClose} size="md">
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                Edit Service List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Form.Group>
                      <Form.Label>Service Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleChange}
                      ></Form.Control>
                       <Form.Label>Sub Heading</Form.Label>
                      <Form.Control
                        type="text"
                        value={subHeading}
                        name="subHeading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Sort Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={sortDescription}
                        name="sortDescription"
                        onChange={handleChange}
                      ></Form.Control>
                  <Form.Label>Upload</Form.Label>{" "}
                  <Form.Control
                    type="file"
                    id="file"
                    // value={file}
                    onChange={handleFileChange}
                  ></Form.Control>
                </Form.Group>
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

export default ServiceCategories;
