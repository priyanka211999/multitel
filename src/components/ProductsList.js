import React,{useState,useEffect} from "react";
import data from "../Data";
import "./proList.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAllProducts,imageUrl} from "../services/category";
import Image19 from ".././assets/Image19.png"
import {formatAmount} from "../utils/AmountFormatter"
import { baseurl } from "../utils/request";
import ProductCard from "./atoms/ProductCard";
import ReactPaginate from "react-paginate";

const ProductsList = () => {
  const navigate = useNavigate();
  const [allProducts,setAllProducts] = useState([])

  const handleGetallProducts  = async () =>{
    try{
    const resp =  await getAllProducts()
    console.log(resp)
    setAllProducts(resp.data)
    }
    catch(error) {
      alert("something Went Wrong","Error") 
    }
  }

  useEffect(() => {
    handleGetallProducts();
     console.log("allProducts",allProducts)
  }, []);

  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(allProducts.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  

  const displayProducts =
  
  allProducts &&
  allProducts.slice(pagesVisited, pagesVisited + usersPerPage).map((product) => {
      return (
        <ProductCard product={product} key={product.id} />
        // <Col md={4} key={product.id}>
        //   <Card style={{ width: "16rem", marginBottom: "25px" }}>
        //     <a
        //       onClick={() =>
        //         navigate(`/products/${product.slug}`, {state: {product}})
        //       }
        //     >
        //       <Card.Img
        //         variant="top"
        //         // src={imageUrl(product.cover_img) !=null ?product.cover_img:Image19}
        //         src={
        //           product?.cover_img
        //             ? `${baseurl}/images/${product?.cover_img}`
        //             : "/assets/images/product.png"
        //         }
        //         style={{ border: "25px solid #F5F6FA", height: "180px" }}
        //       />
        //     </a>
        //     <Card.Body style={{ textAlign: "left", height: "180px" }}>
        //       <a
        //         onClick={() =>
        //           navigate(`/products/${product.slug}`, {state: {product}})
        //         }
        //       >
        //         <Card.Title style={{ fontSize: "x-small" }}>
        //           {product.name}
        //         </Card.Title>
        //       </a>
        //       <Card.Text style={{ textAlign: "left", fontSize: "small" }}>
        //         {product.description}
        //       </Card.Text>
        //       <Col
        //         xs={12}
        //         md={8}
        //         style={{
        //           color: "orange",
        //           textAlign: "left",
        //           paddingLeft: "initial",
        //         }}
        //       >
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>


        //         <p style={{ textAlign: "left", color: "#1D3557" }}>                 
        //         {formatAmount(product.price)}
        //         </p>
        //       </Col>
        //       <Col>
        //         <Button
        //           className="pull-right secondary_bg"
        //           variant="primary"
        //           size="sm"
        //           style={{
        //             marginTop: "-55px",
        //             marginLeft: "90px",
        //             border: "none",
        //           }}
        //         >
        //           Add to Cart
        //         </Button>
        //       </Col>
        //     </Card.Body>
        //   </Card>
        // </Col>
      );
    });
  return (
    <Container>
      <Row>
        <h5 className="text-left" style={{ padding: "40px" }}>
          Products
        </h5>
      </Row>
        <div className="row" style={{ paddingLeft: "65px" }}>
          {allProducts.length ? displayProducts : "Loading..."}
        </div>
        <Row>
          <div className="col-md-7"></div>
        <div className="col-md-5 product_pagination" style={{display:"inherit", marginBottom:"20px", marginTop:"20px"}}>
        <ReactPaginate 
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
        </div>
        </Row>
      
    </Container>
  );
};

export default ProductsList;