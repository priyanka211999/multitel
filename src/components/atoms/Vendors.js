import React, { useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";

function Vendors({vendorList}) {
  console.log(vendorList)


  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(vendorList.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Table responsive="md" className="my-5">
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th style={{width: "10%"}}>Sl. No.</th>
                <th style={{width: "20%"}}>Vendor Name</th>
                <th style={{width: "20%"}}>Vendor Phone</th>
                <th style={{width: "20%"}}>Vendor Email</th>
                <th style={{width: "30%"}}>Vendor Address</th>
              </tr>
            </thead>
            <tbody>
              {vendorList
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map((item, i) => (
                  <tr key={item.id}>
                    <td style={{width: "10%"}}>{i + 1}</td>
                    <td style={{width: "20%"}}>{`${item.first_name} ${item.last_name}`}</td>
                    <td style={{width: "20%"}}>{item.phone}</td>
                    <td style={{width: "20%"}}>{item.email}</td>
                    <td style={{width: "30%"}}>{item.address}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {pageCount > 1 && (
            <Row>
              <div className="col-md-7"></div>
              <div
                className="col-md-5 product_pagination"
                style={{
                  display: "inherit",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <ReactPaginate
                  previousLabel={<i class="fa-solid fa-arrow-left fa-lg"></i>}
                  nextLabel={<i class="fa-solid fa-arrow-right fa-lg"></i>}
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
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Vendors;

// import React from 'react';
// import { Button, Col, Container, Row ,Table } from "react-bootstrap";

// const Vendors = () => {
//   return (
//     <div className="container">
//     <Table responsive="md" className="mt-5 mb-4">
//              <thead style={{backgroundColor:"#0076B5", color:"white"}}>
//                <tr>
//                  <th>S.No</th>
//                  <th>Vendor Name</th>
//                  <th>Vendor Phone</th>
//                  <th>Vendor Email</th>
//                  <th>Vendor Address</th>
//                </tr>
//              </thead>
//              <tbody>
//                <tr>
//                  <td>1</td>
//                  <td>Mark</td>
//                  <td>245-568-5698</td>
//                  <td>mark@gmail.com</td>
//                  <td>1st Block 1st Cross, Rammurthy nagar</td>
//                </tr>
//                <tr>
//                  <td>2</td>
//                  <td>Mark</td>
//                  <td>245-568-5698</td>
//                  <td>mark@gmail.com</td>
//                  <td>1st Block 1st Cross, Rammurthy nagar</td>
//                </tr>
//                <tr>
//                  <td>3</td>
//                  <td>Mark</td>
//                  <td>245-568-5698</td>
//                  <td>mark@gmail.com</td>
//                  <td>1st Block 1st Cross, Rammurthy nagar</td>
//                </tr>
//                <tr>
//                  <td>4</td>
//                  <td>Mark</td>
//                  <td>245-568-5698</td>
//                  <td>mark@gmail.com</td>
//                  <td>1st Block 1st Cross, Rammurthy nagar</td>
//                </tr>
//                <tr>
//                  <td>5</td>
//                  <td>Mark</td>
//                  <td>245-568-5698</td>
//                  <td>mark@gmail.com</td>
//                  <td>1st Block 1st Cross, Rammurthy nagar</td>
//                </tr>
//              </tbody>
//            </Table>

//     </div>
//   )
// }

// export default Vendors
