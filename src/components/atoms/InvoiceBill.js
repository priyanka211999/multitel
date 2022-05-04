import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

function InvoiceBill() {
  return (
    <Container>
      <h4 className="mb-3">Invoice</h4>
      <Row>
        <Col md={3}>
          <h6>Bill To</h6>
          <p>
            31897 Colemen Avenue <br /> California, 92262
          </p>
        </Col>
        <Col md={3}>
          <h6>Ship To</h6>
          <p>
            4662 White Avenue <br /> Curpose Cristi, 78405
          </p>
        </Col>
        <Col md={3}></Col>
        <Col md={3}>
          <p>
            Invoice# 003452 <br />
            Invoice Date 11/04/2022 <br />
            Due Date 26/4/2022
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table responsive="sm">
            <thead style={{ backgroundColor: "#0076B5", color: "white" }}>
              <tr>
                <th>Quantity</th>
                <th>Description</th>
                <th>Unit Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Item Description Goes here</td>
                <td>$100.00</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Item Description Goes here</td>
                <td>$100.00</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Item Description Goes here</td>
                <td>$100.00</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td>$300.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Tax</td>
                <td>$5.00</td>
              </tr>
              <tr style={{ backgroundColor: "#EFEFEF" }}>
                <td></td>
                <td></td>
                <td>Grand Total</td>
                <td>$305.00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default InvoiceBill;
