import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import {
  getAllCms,
  getAddcms,
  getEditcms,
  getDeletecms,
  imageUrl,
} from "../../services/category";
// import data from "../../Data"

function Staticpage() {
  const [show, setShow] = useState(false);
  const [cmsData, setCmsData] = useState("");
  const [DeleteShow, setDeleteShow] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState("");
  const [ShowEditModal, setShowEditModal] = useState(false);
  const [editImage, setEditImage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setFile] = useState("");
  let imageWidth = 1920;
  let imageHeight = 593;
  const [data2, setData2] = useState({
    id: "",
    Title: "",
    subheading: "",
    link: "",
    description: "",
    name: "",
    button: "",
    page_slug: "",
  });

  const { id, Title, subheading, link, description, name, button, page_slug } =
    data2;

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  // const handleFileChange = (event) => {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = function (e) {
  //     var image = new Image();
  //     image.src = e.target.result;
  //     console.log("image",image)
  //     image.onload = function () {
  //       var height = this.height;
  //       var width = this.width;
  //       if (height == 593 || width == 1920) {
  //         setFile(event.target.files);
  //       } else {
  //         setFile("");
  //       }
  //     };
  //   };

    // setFile(event.target.files);
  //   console.log(file, "file");
  // };

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
  const handleClose = () => {
    setData2("");
    setFile("");
    setShow(false);
  };

  const handleDeletecms = async () => {
    const data = {
      id: deleteRecord.id,
    };
    try {
      await getDeletecms(data);
      alert("Category Deleted Sucessfully");
      setDeleteShow(false);
      handlegetcms();
    } catch (error) {
      console.log("error", error);
      alert("Something Went Wrong");
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("description", description);
    data.append("name", name);
    data.append("title", Title);
    data.append("subtitle", subheading);
    data.append("link", link);
    data.append("button", button);
    data.append("page_slug", page_slug);

    if (
      Title === "" ||
      subheading === "" ||
      description === "" ||
      link === "" ||
      page_slug === "" ||
      file === ""
    ) {
      setErrorMsg("Fill the Mandatory Filelds");
    }
    // else if (file.width != imageWidth && file.height != imageHeight)
    // {
    //   setErrorMsg("Please Upload the Image with given height and width")
    // }
    else
      try {
        await getAddcms(data);
        setErrorMsg("");
        alert("Added  Cms.", "success");
        setShow(false);
        handlegetcms();
      } catch (error) {
        alert(error.data.message, "error");
      }
  };

  //  edit API
  const handleEditShow = (item) => {
    setData2({
      id: item?.id,
      Title: item?.title,
      subheading: item?.subtitle,
      link: item?.link,
      name: item?.name,
      description: item?.description,
      page_slug: item?.page_slug,
      button: item?.button,
    });
    setEditImage(item.image ? item.image : "");
    setShowEditModal(true);
  };

  const handleEditContent = async () => {
    // console.log("content edited");
    const data = new FormData();
    for (var x = 0; x < file.length; x++) {
      data.append("image", file[x]);
    }
    data.append("de scription", description);
    data.append("name", name);
    data.append("title", Title);
    data.append("subtitle", subheading);
    data.append("link", link);
    data.append("button", button);
    data.append("id", id);
    data.append("page_slug", page_slug);
    try {
      await getEditcms(data);
      alert("Cms Edited Sucessfully");
      setData2("");
      setFile(" ");
      setShowEditModal(false);
      handlegetcms();
    } catch (error) {
      alert("Something Went Wrong");
    }
  };
  const handleEditClose = () => {
    setData2("");
    setFile("");
    setShowEditModal(false);
  };

  const handlegetcms = async () => {
    try {
      const resp = await getAllCms();
      setCmsData(resp.data);
    } catch (error) {
      alert("something Went Wrong");
    }
  };

  useEffect(() => {
    handlegetcms();
    // console.log("uvuuuv",cmsData)
  }, []);

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
      <div class="row d-flex align-items-center justify-content-between">
         <div class="col-lg-6 col-md-6 text-left">
          <h3 className="mt-4 mb-4">Content Management</h3>
          </div>
          <div className="col-lg-6 col-md-6 text-right">
            <div className="header justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-sm my-3"
                style={{
                  width: "150px",
                  // marginRight: "15px",
                  backgroundColor: "#0076B5",
                }}
                onClick={() => {
                  setShow(true);
                }}
              >
                <i className="fas fa-plus-circle"></i> Add New Content
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
                    Add New Content
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">
                    <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={Title}
                        name="Title"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Button</Form.Label>
                      <Form.Control
                        type="text"
                        value={button}
                        name="button"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Sub-Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={subheading}
                        name="subheading"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Link</Form.Label>
                      <Form.Control
                        type="text"
                        value={link}
                        name="link"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Page slug</Form.Label>
                      <Form.Control
                        type="text"
                        value={page_slug}
                        name="page_slug"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Upload</Form.Label>{" "}
                      <p style={{ fontSize: "small" }}>
                        <span style={{ color: "red" }}>* </span>Image should be
                        the size of 1920*600px
                      </p>
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
                    submit
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
              <th>Title</th>
              <th>Image</th>
              <th>Subheading</th>
              <th>Description</th>
              <th>link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cmsData &&
              cmsData.map((item, i) => (
                <tr>
                  {console.log("cms", cmsData)}

                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={imageUrl(item.image)} style={{ width: "60px" }} />
                  </td>
                  <td>{item.subtitle}</td>
                  <td>{item.description}</td>
                  <td>{item.link}</td>
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
          <Modal.Title style={{ color: "#0076B5" }}>Delete Content</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this Content?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handlecloseDelete()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeletecms()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={ShowEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#0076B5", marginLeft: "25px" }}>
            Edit Content
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={Title}
                name="Title"
                onChange={handleChange}
              ></Form.Control>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
              ></Form.Control>
              <Form.Label>Button</Form.Label>
              <Form.Control
                type="text"
                value={button}
                name="button"
                onChange={handleChange}
              ></Form.Control>
              <Form.Label>Sub-Title</Form.Label>
              <Form.Control
                type="text"
                value={subheading}
                name="subheading"
                onChange={handleChange}
              ></Form.Control>
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                value={link}
                name="link"
                onChange={handleChange}
              ></Form.Control>
              <Form.Label>Page Slug</Form.Label>
              <Form.Control
                type="text"
                value={page_slug}
                name="page_slug"
                onChange={handleChange}
              ></Form.Control>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                value={description}
                name="description"
                onChange={handleChange}
              ></Form.Control>
              <Form.Label>Upload</Form.Label>
              <p style={{ fontSize: "small" }}>
                <span style={{ color: "red" }}>* </span>Image should be the size
                of 1920*600px
              </p>
              <Form.Control
                type="file"
                id="file"
                // value={file}
                onChange={handleFileChange}
              ></Form.Control>
              <img src={imageUrl(editImage)} style={{ width: "60px" }} />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            size="lg"
            onClick={handleEditContent}
            style={{ width: "200%" }}
          >
            submit
          </Button>

          <label style={{ color: "red", justifyContent: "center" }}>
            {errorMsg}
          </label>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Staticpage;
