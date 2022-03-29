import React, { useEffect, useState} from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import Home from "../Home";
import "./EditBook.css";

function EditBook() {

  const [msg, setMsg] = useState('');
  const [exist, setExist] = useState('');
  const [editMsg, seteditMsg] = useState('');



    let navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const {bookId} = useParams();

    const isAdd = !bookId;

    useEffect(() => {
      if(!isAdd) {
        axios.get(`http://localhost:8080/api/BooksDetails/${bookId}`).then((res1) => {
          const bookDataState = res1.data;
          const fields = ['BDID', 'Bookname', 'Category', 'Publisher', 'quantity'];
          fields.forEach(field => setValue(field, bookDataState[field]));
        });
      }
    });

    function onSubmit(data) {
      return isAdd ? createUser(data) : updateUser(bookId, data);
    }

    function createUser(data) {
      const addData = {
        data: data
      };
      axios.post('http://localhost:8080/api/BooksDetails/add/' , addData)
      .then((res) => {
        console.log(res.data.status);
        console.log(res.data.exist);
        setMsg(res.data.status);
        setExist(res.data.exist);
      });

    }

    function updateUser(id, data) {
      
      const editData = {
        id: id,
        data: data
      };
      axios.post('http://localhost:8080/api/BooksDetails/edit/' , editData)
      .then((res) => {
        console.log(res.data.status);
        seteditMsg(res.data.status);

      });

    }
    

    return (
      
      <Container>
        <Home/><br/>
        <Row><br/>
          <Col md="10">
            <label>Add Book and Edit Book Form </label>
           
          </Col>
          <Col md="2">
            <Button onClick={() => {navigate("/classexample")}}>Back</Button>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit(onSubmit)} className="AddBook-popup">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>BookID</Form.Label>
            <Form.Control name="BDID" type="text"   placeholder="Enter Book Id" {...register('BDID')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>BookName</Form.Label>
            <Form.Control name="Bookname" type="text"  placeholder="Enter Book Name" {...register('Bookname')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category Name</Form.Label>
            <Form.Control name="Category" type="text"  placeholder="Enter Category Name" {...register('Category.Name')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Publisher Name </Form.Label>
            <Form.Control name="Publisher" type="text"  placeholder="Enter Publisher Name" {...register('Publisher.Name')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control name="quantity" type="text"  placeholder="Add Quantity" {...register('quantity')} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
          <label>{msg} {exist} {editMsg}<Link to={`/classexample`}>Go to back Page</Link> </label>
        </Form>
      </Container>
    );
}

export default EditBook

