import React from 'react'

export default class ApiTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null, isLoaded: false, items: [] }; } 
  
      componentDidMount() { //call api using fetch in react componentDidMount
      fetch("https://shazib.online/ords/general/blog/title")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,  //set loading true 
              items: result.items //get items in the result
            });
          },
          (error) => { 
            this.setState({
              isLoaded: true,
              error
            });} ) }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>; //reutn error if component cannot render
      } else if (!isLoaded) { //if loading is set false then render  loading
        return <div>Loading...</div>;
      } else { //else show api items 
        return (
          <ul>
            {this.state.items.map((item, index) => ( <li key={index}>{item.title}  
              </li>
            ))}
          </ul>);}}}