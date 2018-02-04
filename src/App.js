import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import Search from './Search';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Mean Girls'
        }, {
          title: 'Hackers'
        }, {
          title: 'The Grey'
        }, {
          title: 'Sunshine'
        }, {
          title: 'Ex Machina'
        }
      ],

      query: '',
      show: false
    }
  }

  componentWillReceiveProps(e) {
    this.setState({query: e.target.value})
  }
  toggleModal() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (

      <div className="App">
        
        <div className="page-header">
          <h1 className="header">Movie List</h1>
        </div>
        <div className="container">

          <form style={{margin: '10px', float: 'left'}} className="form-inline">
            <div className="form-group">
              <div className=" col-md-6 input-group">
              <input type="text" className="form-control" placeholder="add movie title here"/> 
              </div>
          </div>
          <button type="submit" className="btn btn-default">Add Movie</button>
      </form>
      <form style={{margin: '10px'}} className="form-inline">

      <div className=" col-md-4 input-group">        
            <input  className="form-control" type="text" placeholder="search...." onChange={(e) => { this.setState({query: e.target.value})
                Search.componentWillUpdate; }} className="form-control" id="movies" />
                </div>


                
                <button className="btn btn-default " type="button">
                Go !!!
                </button>


          </form>
          </div>
          <div className="container">



        


        
        
          <Jumbotron>

            <ul className="list-group"> 
            
              <Search movies={this.state.movies} query={this.state.query} modalToggle={this.toggleModal.bind(this)}/>

            </ul>
          </Jumbotron>
          </div>
        </div>


       

    );
  }
}

export default App;
