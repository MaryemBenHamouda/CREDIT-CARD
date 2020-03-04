import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    name: "",
    num: "",
    date:"",
  };
  changeCard = e => {
    this.setState({
   [e.target.name]:e.target.value
      
    });
  };
  render() {
    var regex = new RegExp(/([^A-Za-z\-])/)
     return (
      
    <div className ="container">
      <div className="card">
        <div><h3> BEN HAMOUDA </h3></div>
        <div className="img">
          <img src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png" width="100px" />
        </div>
        <div className="card-numb">
          <h4>{this.state.num.padEnd(16,'*').replace(/(.{4})/g, '$1 ').padEnd(16,'*')}</h4>
          
        </div>
        <div className="section">
          <h6> {this.state.date.slice(0,2)+'/'+ this.state.date.slice(2,4)} </h6>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" width="120px" />
        </div>
        <div className="name">
          <h6>{this.state.name.toUpperCase()}</h6>
        </div>
      </div>
      <div className="form">
        <input className="inputnumcompt"  maxLength="16" placeholder="Num-Compt" type="text" name="num" onChange={this.changeCard} />
        <input className="inputname" maxLength="20" placeholder="Name" type="text" name="name" onChange={this.changeCard} />
        <input className="inputdate" maxLength="5" placeholder="Date" type="text" name="date" onChange={this.changeCard} />
      </div>
    </div>
  )
}
}


export default App;
