import React, { Component } from "react";
import axios from "axios";
import "./ClassExample.css";
import ClassBookList from "./ClassBookList";
import Home from "../Home"

class ClassExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDataState: [],
      categoriesDataState: [],
      publisherDataState: [],
    };
  }

  componentDidMount() {
    this.callBookApi();
    this.callCategoriesApi();
    this.callPublsiherApi();
  }

  callBookApi() {
    axios.get(`http://localhost:8080/api/BooksDetails`).then((res1) => {
      const bookDataState = res1.data;
      this.setState({ bookDataState });
    });
  }

  callCategoriesApi() {
    axios.get(`http://localhost:8080/api/categorydetails`).then((res2) => {
      const categoriesDataState = res2.data;
      this.setState({ categoriesDataState });
    });
  }

  callPublsiherApi() {
    axios.get(`http://www.localhost:8080/api/publisherdetails`).then((res) => {
      const publisherDataState = res.data;
      this.setState({ publisherDataState });
    });
  }


  onHandelRemove = (BDID, Bookname) => {  
    fetch("http://localhost:8080/api/BooksDetails/delete/" + BDID, {
        method: "GET",
      }).then((result) => {
        result.json().then((res) => {             
        this.callBookApi();
        });
      });
  };

  render() {
    const { bookDataState, categoriesDataState, publisherDataState } = this.state;
    return (
      <div className="container">
        <Home />
        <ClassBookList
          bookData={bookDataState}
          categoriesData={categoriesDataState}
          publsiherData={publisherDataState}
           ondelete={this.onHandelRemove}
        />
      </div>
    );
  }
}

export default ClassExample;
