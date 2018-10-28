import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./filter";
import load from "../utils/load";
import ClientList from "./ClientList";
import compon from "./compon";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      filter: null,
      f_flag: false,
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
    var data = [];
    if (this.state.data) {
      data = this.state.data;
    }

    return (
      <div>
        <Search
          term={this.state.term}
          data={data}
          update={this.updateData.bind(this)}
          filter={this.state.filter}
          f_flag={this.state.f_flag}
        />
        <ClientList
          data={data}
          filter={this.state.filter}
          f_flag={this.state.f_flag}
        />
      </div>
    );
  }
}

export default connect(state => ({
  state: state
}))(App);
