

import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class Category extends React.Component{

  state = {
    loading: true,
    categoryOne: null,
    categoryTwo: null,
    categoryThree: null,
  };
  async componentDidMount() {
    const url = 'http://localhost:3001/categories';
    const response = await  fetch(url, {headers : {'Authorization': 'whatever-you-want'}});
    const data = await response.json();
    
    this.setState({ categoryOne: data.categories[0], categoryTwo: data.categories[1], 
      categoryThree: data.categories[2] , loading: false });
  
  
  }

  

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.categoryOne || !this.state.categoryTwo || !this.state.categoryThree) {
      return <div>didn't get a Category</div>;
    }
    return (
      
      <Container>
<h1>Categories</h1>
  <Row id="categoryRow">
    
    <Col id="col">{this.state.categoryOne.name}</Col>
    <Col id="col">{this.state.categoryTwo.name}</Col>
    <Col id="col">{this.state.categoryThree.name}</Col>
  </Row>
      </Container>
    );
  }

  
}









