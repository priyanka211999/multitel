import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function InvoiceTable({ detail }) {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h5 style={{ display: "inline-flex" }}>Orders</h5>
          <Button
            variant="primary"
            className="float-right mb-4"
            style={{ display: "inline-flex" }}
          >
            Filter
          </Button>{" "}
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Select</th>
                <th>Invoice</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                onClick={() => {
                  detail(true);
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </td>
                <td>003452</td>
                <td>Company Name</td>
                <td>22 June 2022</td>
                <td>$200.00</td>
                <td>
                  Delivered{" "}
                  <a href="#">
                    <i
                      class="fa-solid fa-ellipsis-vertical ml-5 fa-lg"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </td>
              </tr>
              <tr
                onClick={() => {
                  detail(true);
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </td>
                <td>003452</td>
                <td>Company Name</td>
                <td>22 June 2022</td>
                <td>$200.00</td>
                <td>
                  Delivered{" "}
                  <a href="#">
                    <i
                      class="fa-solid fa-ellipsis-vertical ml-5 fa-lg"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </td>
              </tr>
              <tr
                onClick={() => {
                  detail(true);
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </td>
                <td>003452</td>
                <td>Company Name</td>
                <td>22 June 2022</td>
                <td>$200.00</td>
                <td>
                  Delivered{" "}
                  <a href="#">
                    <i
                      class="fa-solid fa-ellipsis-vertical ml-5 fa-lg"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </td>
              </tr>
              <tr
                onClick={() => {
                  detail(true);
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </td>
                <td>003452</td>
                <td>Company Name</td>
                <td>22 June 2022</td>
                <td>$200.00</td>
                <td>
                  Delivered{" "}
                  <a href="#">
                    <i
                      class="fa-solid fa-ellipsis-vertical ml-5 fa-lg"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceTable;
