/*import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      data: null,
      active: 0,
      term: ''
    };
    this.loadData();
  }
  getjson() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "clients.json", false);
    xhr.send();
    const obj = JSON.parse(xhr.responseText);
    obj.map((first, index) => {
      console.log(first.general.firstName);
    });
    console.log(obj);
  }
  
  render() {
    return <div onClick={this.getjson}>Lala</div>;
  }
}

export default connect(state => ({
  state: state
}))(App);*/
import React, { Component } from "react";
import { connect } from "react-redux";
import load from "../utils/load";
import ClientList from "./ClientList";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      active: 0,
      term: ""
    };

    this.loadData();
  }

  loadData() {
    load(this.props.data).then(users => {
      this.setState({
        data: JSON.parse(users)
      });
    });
  }

  /*updateData(config) {
    this.setState(config);
  }*/

  render() {
    console.log(this.state.data);
    return (
      <div>
        <ClientList data={this.state.data} />
      </div>
    );
  }
}
export default connect(state => ({
  state: state
}))(App);
