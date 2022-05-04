import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table, Dropdown } from "react-bootstrap";
import Select from "react-select";
import "./contacts.css";
import {
  getAddVendor,
  getEditVendor,
  getDeleteVendor,
  getAllVendors,
  imageUrl,
} from "../../services/category";
import { Link } from "react-router-dom";

function Contacts() {
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // console.log("serviceList", servicesList);
  };
  const [show, setShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [vendorList, setVendorList] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const toggleOpen = () => setDropdown(!dropdown);

  const [data2, setData2] = useState({
    id: "",
    username: "",
    Phone: "",
    email: "",
    Adress: "",
    first_name: "",
    last_name: "",
  });
  const { id, name, Phone, email, Adress, first_name, last_name, username } =
    data2;

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

  const handleDeleteContacts = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
       await getDeleteVendor(data);
      alert("Vendor Contacts Deleted Sucessfully");
      setDeleteShow(false);
      handleAllContactList();
    } catch (error) {
      console.log("error", error);
      alert("Something Went Wrong");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const finalMultiValue =
      category &&
      category.map((data) => {
        return data.value;
      });
    console.log("AddMultiValue", finalMultiValue);
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("address", Adress);
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("email", email);
    data.append("category", finalMultiValue);
    data.append("phone", Phone);
    // data.append("gendar", gender);
    data.append("user_name", username);
    // data.append("adress", Adress);

    if (
      first_name === "" ||
      last_name === "" ||
      Adress === "" ||
      email === "" ||
      Phone === "" ||
      category === ""
    ) {
      setErrorMsg("Fill the Mandatory Filelds");
    } else
      try {
        await getAddVendor(data);
        alert("Added  contacts Succesfully.", "success");
        setErrorMsg("");
        setData2(" ");
        setCategory(" ");
        setShow(false);
        handleAllContactList();
      } catch (error) {
        alert(error.data.message, "error");
      } finally {
        setShow(false);
      }
  };

  //  edit API
  const handleEditShow = (item) => {
    console.log("itemcont",item)
    setData2({
      id:item.id,
      username:item.user_name,
      Phone:item.phone,
      email:item.email,
      Adress:item.address,
      first_name:item.first_name,
      last_name:item.last_name
    });
    setCategory(item.category)
    setShowEditModal(true);
  };
  const handleEditContacts = async () => {
    const finalMultiValue =
    category &&
    category.map((data) => {
      return data.value;
    });
  console.log("AddMultiValue", finalMultiValue);
  const data = new FormData();
  for (var x = 0; x < file.length; x++) {
    data.append("image", file[x]);
  }
  data.append("address", Adress);
  data.append("first_name", first_name);
  data.append("last_name", last_name);
  data.append("email", email);
  data.append("category", finalMultiValue);
  data.append("phone", Phone);
  // data.append("gendar", gender);
  data.append("user_name", username);
  // data.append("adress", Adress);

    try {
       await getEditVendor(data);
      alert("Contacts Edited Sucessfully");
      setData2("");
      setFile("");
      setShowEditModal(false);
      handleAllContactList();
    } catch (error) {
      alert("Something Went Wrong");
     }
  };
  const handleEditClose = () => {
    setData2("");
    setShowEditModal(false);
  };

  //Get All Category Api

  const handleAllContactList = async (data) => {
    try {
      const resp = await getAllVendors(data);
      setVendorList(resp && resp.data.data);
      console.log("resp", resp.data.data);
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    }
  };

  useEffect(() => {
    handleAllContactList();
  }, []);

  //filter

  const handleClick = async (categories) => {
    console.log("category",categories);
    const data = {
      category : categories
    } 
    try {
      const resp = await getAllVendors(data);
      setVendorList(resp && resp.data.data);
      console.log("resp", resp.data.data);
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    } 
  };

  const Categoryoptions = [
    { value: "Informatics & Accessories", label: "Informatics & Accessories" },
    { value: "Ip Telephony", label: "Ip Telephony" },
    { value: "Network equipments", label: "Network equipments" },
    { value: "cpe", label: "cpe" },
    { value: "Telecom", label: "Telecom" },
    { value: "Promotions", label: "Promotions" },
    { value: "otherproducts", label: "otherproducts" },
  ];

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6 text-left">
            <h3 className="mt-4 mb-4">Vendor Contacts</h3>
          </div>
          {/* <div className=
          "header justify-content-end"> */}
          <div className="col-lg-6 col-md-6 text-right">
            <Dropdown
              className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-4 my-2 my-md-0"
              style={{ position: "relative" }}
            >
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ background: "#0076B5", border: "none" }}
              >
                <span className="username">Categories</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item onClick={() =>handleClick("Informatics & Accessories")}>Informatics & Accessories</Dropdown.Item>
                <Dropdown.Item onClick={() =>handleClick("Ip Telephony")}>Ip Telephony</Dropdown.Item>
                <Dropdown.Item onClick={() =>handleClick("Network Equipment")}>Network equipments</Dropdown.Item>
                <Dropdown.Item onClick={() =>handleClick("Cpe")}>cpe</Dropdown.Item>
                <Dropdown.Item onClick={() =>handleClick("Telecom")}>Telecom</Dropdown.Item>
                <Dropdown.Item onClick={() =>handleClick("Promotions")}>Promotions</Dropdown.Item>
                <Dropdown.Item onClick={() =>handleClick("otherproducts")}>otherproducts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

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
              <i className="fas fa-plus-circle"></i> Add New Contacts
            </button>
            <Modal show={show} onHide={handleClose} className="add_cat_modal">
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
                  Add New Contacts
                </Modal.Title>
                <div className="container">
                  <Form.Group>
                    <Form.Label> First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={first_name}
                      name="first_name"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label> Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={last_name}
                      name="last_name"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      name="username"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      value={Phone}
                      name="Phone"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Category</Form.Label>
                    <Select
                      isMulti
                      name="category"
                      options={Categoryoptions}
                      // onChange={handleChange}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      value={category}
                      onChange={(value) => {
                        setCategory(value);
                        console.log(value);
                      }}
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      name="email"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="textarea"
                      value={Adress}
                      name="Adress"
                      onChange={handleChange}
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
        {/* </div> */}
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vendorList &&
              vendorList.map((item, i) => (
                <tr>
                  {console.log("pc", vendorList)}

                  <td>{i + 1}</td>
                  <td>{`${item.first_name}${item.last_name}`}</td>
                  <td>{item.category}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
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
          <p>Are you sure want to delete this Promotion ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDeleteContacts(deleteRecord)}
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
                Edit Contacts List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
                  <Form.Group>
                    <Form.Label> First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={first_name}
                      name="first_name"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label> Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={last_name}
                      name="last_name"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      name="username"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      value={Phone}
                      name="Phone"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Category</Form.Label>
                    <Select
                      isMulti
                      name="category"
                      options={Categoryoptions}
                      // onChange={handleChange}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      value={category}
                      onChange={(value) => {
                        setCategory(value);
                        console.log(value);
                      }}
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      name="email"
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Adress</Form.Label>
                    <Form.Control
                      type="textarea"
                      value={Adress}
                      name="Adress"
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                size="lg"
                onClick={handleEditContacts}
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

export default Contacts;
