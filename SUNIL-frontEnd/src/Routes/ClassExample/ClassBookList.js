import React, { Component } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ClassBookList.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class ClassBookList extends Component {
  render() {
    const { bookData, categoriesData, publsiherData } = this.props;
    
    const handelClickDelete = (BDID, Bookname) => {
      this.props.ondelete(BDID, Bookname);
    };

    const rows = bookData.map((bk) => {
      return (
        <tr key={bk.BDID}>
          <td>{bk.BDID}</td>
          <td>{bk.Bookname}</td>
          <td>{bk.Category.Name}</td>
          <td>{bk.Publisher.Name}</td>
          <td>{bk.IsActive.toString()}</td>
          <td>{bk.quantity}</td>

          <td>
            {/* <Link to={`/editbook/${bk.BDID}`} style={{ color: `white` }}>
              <Button variant="primary">Edit</Button>
            </Link> */}

            <Link to={`/editbook/${bk.BDID}`} style={{ color: `white` }}>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </td>

          <td>
            <Popup
              trigger={
                <i
                  class="fa fa-trash"
                  aria-hidden="true"
                  style={{ color: `red` }}
                ></i>
              }
              position="right center"
              modal="true"
            >
              <div>
                <h3>Delete Book</h3>
                <hr />
                <h5>
                  {`{are you sure you want to delete book: ${bk.Bookname}`}
                </h5>
                <Button onClick={() => handelClickDelete(bk.BDID, bk.Bookname)}>
                  Comfirm
                </Button>
              </div>
            </Popup>
          </td>
        </tr>
      );
    });

    const displayCategoriesData = categoriesData.map((ct) => {
      return (
        <tr key={ct._id}>
          <td>{ct.categoryid}</td>
          <td>{ct.Name}</td>

          <td>
            <Button>Edit</Button>
          </td>
          <td>
            <Button>Delete</Button>
          </td>
        </tr>
      );
    });

    const displayPublisherData = publsiherData.map((pub) => {
      return (
        <tr key={pub._id}>
          <td>{pub.publisherid}</td>
          <td>{pub.Name}</td>

          <td>
            <Button>Edit</Button>
          </td>
          <td>
            <Button>Delete</Button>
          </td>
        </tr>
      );
    });

    return (
      <Container>
        <Row>
          <Col md="12">
            <h3>BookList Details </h3>
          </Col>
          <Col md="12">
            <Link to="/addbook">
              <Button variant="success">Add New Book</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="flat-table flat-table-1">
              <tr>
                <th>BookID</th>
                <th>BookName</th>
                <th>Category Name</th>
                <th>Publisher Name</th>
                <th>IsActive</th>
                <th>Quantity</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {rows}
            </table>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="flat-table flat-table-2">
              <tr>
                <th>Cat_Id</th>
                <th>Cat_Name</th>
              </tr>
              {displayCategoriesData}
            </table>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="flat-table flat-table-3">
              <tr>
                <th>Pub_Id</th>
                <th>Pub_Name</th>
              </tr>
              {displayPublisherData}
            </table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ClassBookList;
