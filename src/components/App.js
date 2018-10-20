import React, { Component } from "react";
import { connect } from "react-redux";
import load from "../utils/load";
import ClientList from "./ClientList";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      obj: null,
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

  updateData(config) {
    this.setState(config);
  }

  render() {
    var general = [],
      job = [];
    if (this.state.data) {
      this.state.data.map(function(obj, index) {
        general[index] = obj.general;
        job[index] = obj.job;
      });
    }
    console.log(job[1]);
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
