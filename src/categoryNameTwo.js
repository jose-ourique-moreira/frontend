

import React from 'react';
import './App.css';
export default class CategoryTwo extends React.Component{

    state = {
      loading: true,
      person: null
    };
    async componentDidMount() {
      const url = 'http://localhost:3001/categories';
      const response = await  fetch(url, {headers : {'Authorization': 'whatever-you-want'}});
      const data = await response.json();
      
      this.setState({ person: data.categories[1], loading: false });
    
    }
  
    render() {
      if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.person) {
        return <div>didn't get a person</div>;
      }
      return (
        <div>
          <div>{this.state.person.name}</div>
        </div>
      );
    }
  } 