import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import CreateMultiselect from "../atoms/CreateMultiselect";
import Creatable from "react-select/creatable";
import {
  getAllPromotions,
  getAddPromotion,
  getDeletePromotion,
  getEditPromotion,
  imageUrl,
} from "../../services/category";
import { Link } from "react-router-dom";

function Promotions() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [DeleteShow, setDeleteShow] = useState(false);
  const [file, setFile] = useState("");
  //   const [banfile, setBanfile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [PromotionList, setPromotionList] = useState("");
  const [tagInputValue, setTagInputValu] = useState("");
  const [tagValue, setTagValue] = useState("");

  const [data2, setData2] = useState({
    id: "",
    name: "",
    description: "",
    tag: "",
    options: "",
  });
  const { id, name, tag, description, options } = data2;

//   const Tabletag = (item) =>(item.Promotion_tags.map((data) => `${(data.name)}`))

  const Tabletag = (item) =>{
    return(item.Promotion_tags.map((data)=> {
        return(
            <div>
                <p>{data.name}</p>
            </div>
        )
    }))
  }

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file);
  };

  //MuiltiSelect Create

  const handleTagChange = (tags, value) => {
    setTagValue(value);
    console.log("tagvalue onchange", value);
  };

  const handleKeyDown = (event) => {
    console.log(tagValue)
    if (!tagInputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setTagValue([...tagValue, createOption(tagInputValue)]);
        setTagInputValu("");
        console.log(tagValue)
        event.preventDefault();
        break;
      default:
        break;
    }
  };
  const createOption = (label) => ({
    label,
    value: label,
  });

  const handleInputChange = (value) => {
    setTagInputValu(value);
    console.log("on inpiutchnage tagvalueI", value);
  };

  //Multi select Create

  const handleDeleteshow = (item) => {
    setDeleteShow(true);
    setDeleteRecord(item);
  };
  const handlecloseDelete = () => {
    setDeleteShow(false);
  };

  const handleDeletePromotion = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeletePromotion(data);
      alert("Promotion Deleted Sucessfully");
      setDeleteShow(false);
      handleAllPromotions();
    } catch (error) {
      console.log("error", error);
      alert("Something Went Wrong");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const finalMultiValue =
      tagValue &&
      tagValue.map((data) => {
        return data.value;
      });
    console.log("AddMultiValue",finalMultiValue)
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("name", name);
    data.append("tag", finalMultiValue);

    if (
      name === "" ||
      description === "" ||
      finalMultiValue === ""
    ) {
      setErrorMsg("Fill the Mandatory Filelds");
    } else
      try {
        await getAddPromotion(data);
        alert("Added  Promotion.", "success");
        setShow(false);
        handleAllPromotions();
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
      name: item.name,
      description: item.description,
    });
    const editdata = item.Promotion_tags.map((tags) => createOption(tags.name));
    console.log("editdata", editdata);
    setTagValue(editdata);
    setShowEditModal(true);
    console.log("item", item);
  };
  const handleEditPromotion = async () => {
    const finalMultiValue =
      tagValue &&
      tagValue.map((data) => {
        return data.value;
      });
    // console.log('finalMultiValue',finalMultiValue)
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("name", name);
    data.append("id", id);
    data.append("tag", finalMultiValue);

    try {
      await getEditPromotion(data);
      alert("Promotion Edited Sucessfully");
      // setData2({
      //   id: "",
      //   name: "",
      //   description: "",
      // });
      setData2(' ')
      setFile("");
      setShowEditModal(false);
      handleAllPromotions();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };
  const handleEditClose = () => {
    setData2(' ')
    setShowEditModal(false);
  };

  //Get All Category Api

  const handleAllPromotions = async () => {
    try {
      const resp = await getAllPromotions();
      setPromotionList(resp && resp.data);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    }
  };

  useEffect(() => {
    handleAllPromotions();
  }, []);

  const getMultiSelectValue = (data) => {
    console.log(data, "data");
  };
  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
      <div class="row d-flex align-items-center justify-content-between">
         <div class="col-lg-6 col-md-6 text-left">
          <h3 className="mt-4 mb-4">Promotions</h3>
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
                <i className="fas fa-plus-circle"></i> Add New Promotion
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
                    Add New Promotion
                  </Modal.Title>
                  <div className="container">
                    <Form.Group>
                      <Form.Label>Promotion Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Upload Image</Form.Label>{" "}
                      <Form.Control
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                      ></Form.Control>
                      <Form.Label>key(tag)</Form.Label>
                      <Creatable
                        isClearable
                        isMulti
                        components={{ DropdownIndicator: null }}
                        inputValue={tagInputValue}
                        onChange={(value) => handleTagChange("tags", value)}
                        onInputChange={handleInputChange}
                        placeholder="Please enter the tags and Click Enter"
                        onKeyDown={handleKeyDown}
                        menuIsOpen={false}
                        value={tagValue}
                      />
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
              <th>Sr.No.</th>
              <th>Id</th>
              <th>Promotion</th>
              <th>Image</th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {PromotionList &&
              PromotionList.map((item, i) => (
                <tr>
                  {/* {console.log("pc", PromotionList)} */}

                  <td>{i + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={imageUrl(item.image)} style={{ width: "60px" }} />
                  </td>
                  
                  <td>{item.Promotion_tags && Tabletag(item)}</td>
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
        {/* <Modal.Header closeButton>
          <Modal.Title style={{ color: "#0076B5" }}>Delete Product</Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
        <button
          type="button"
          className="close"
          onClick={handlecloseDelete}
          style={{ position: "absolute", top: "5px", right: "10px" }}
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
          <Modal.Title style={{ color: "#0076B5" }}>Delete Product</Modal.Title>
          <p>Are you sure want to delete this Promotion ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDeletePromotion(deleteRecord)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <div className="col-xl-5  col-lg-4 col-md-3 col-sm-2">
        <div className="header">
          <Modal show={ShowEditModal} onHide={handleEditClose} size="md">
            {/* <Modal.Header closeButton>
              <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                Edit Promotion List
              </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
            <button
              type="button"
              className="close"
              onClick={handleEditClose}
              style={{ position: "absolute", top: "5px", right: "10px" }}
            >
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close</span>
            </button>
            <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
              Edit Promotion
            </Modal.Title>
              <div className="container">
                <Form.Group>
                  <Form.Label>Promotion Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="textarea"
                    value={description}
                    name="description"
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Key(tags)</Form.Label>
                  <Creatable
                    isClearable
                    isMulti
                    components={{ DropdownIndicator: null }}
                    inputValue={tagInputValue}
                    onChange={(value) => handleTagChange("tags", value)}
                    onInputChange={handleInputChange}
                    placeholder="Please enter the tags and Click Enter"
                    onKeyDown={handleKeyDown}
                    menuIsOpen={false}
                    value={tagValue}
                  />
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
                onClick={handleEditPromotion}
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

export default Promotions;
