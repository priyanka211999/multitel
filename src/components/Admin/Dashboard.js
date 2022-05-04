import React from "react";
import Chart from "./charts/chart";
import { Table } from "react-bootstrap";
import network from "../../assets/network.png";
import "./dashboard.css";
import otherproducts from "../../assets/otherproducts.png";
import internet from "../../assets/internet.png";
import cpe from "../../assets/cpe.png";

function Dashboard() {
  //     const Data = [
  //         {
  //         Brand:"Intel",
  //         Name:"v5 router",
  //         Type:"wireless Router",
  //         spec:"Gaming,Websurf,10x fasrter",
  //         price:"20$"
  //     },
  //     {
  //         Brand:"Intel",
  //         Name:"v5 router",
  //         Type:"wireless Router",
  //         spec:"Gaming,Websurf,10x fasrter",
  //         price:"20$"

  //     },
  //     {
  //         Brand:"Intel",
  //         Name:"v5 router",
  //         Type:"wireless Router",
  //         spec:"Gaming,Websurf,10x fasrter",
  //         price:"20$"

  //     }
  // ]
  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <h3 className="mt-4 mb-4">Dashboard</h3>
        {/* <div
        className="col-xl-12  col-lg-12 col-md-12 col-sm-4"
        style={{ paddingTop: "20px" }}
      >
          <h5>Total router Sales 2022</h5>
        <Table striped bordered hover size="md" responsive>
          <thead style={{ backgroundColor: "#0076B5",color:"white" }}>
            <tr>
              <th>Sr.No.</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Name</th>
              <th>Specifications</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Data &&
               Data
            // .slice(
            //     pagesVisited,
            //     pagesVisited + usersPerPage
            //   )
            .map((item, i) => (
                <tr>
                
                  <td>{i+1}</td>
                  <td>{item.Brand}</td>
                  <td>{item.Name}</td>
                  <td>{item.Type}</td>
                  <td>{item.spec}</td>
                  <td>{item.price}</td>
                  
                 
                </tr>
              ))}
          </tbody>
        </Table>
      </div> */}
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card-counter primary" style={{ height: "120px" }}>
                <img
                  className="image"
                  style={{ opacity: "0.2" }}
                  src={network}
                />
                <span class="count-numbers">12</span>
                <span class="count-name">
                  Network <br />
                  Equipment
                </span>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-counter danger" style={{ height: "120px" }}>
                <img
                  className="image"
                  style={{ opacity: "0.2" }}
                  src={internet}
                />
                <span class="count-numbers">599</span>
                <span class="count-name">
                  Internet <br /> Services
                </span>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-counter success" style={{ height: "120px" }}>
                <img className="image" style={{ opacity: "0.2" }} src={cpe} />
                <span class="count-numbers">6875</span>
                <span class="count-name">CPE</span>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-counter info" style={{ height: "120px" }}>
                <img
                  className="image"
                  style={{ opacity: "0.2" }}
                  src={otherproducts}
                />
                <span class="count-numbers">35</span>
                <span class="count-name">otherProducts</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "50px" }} >
        <Chart/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
