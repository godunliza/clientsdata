import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./filter";
import load from "../utils/load";
import ClientList from "./ClientList";
import "bootstrap/dist/css/bootstrap.min.css";
import Client from "./Client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      filter: null,
      f_flag: false,
      id_cl: "0",
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
  item_cl(e) {
    var target = e.target;
    if (target.tagName !== "DIV") {
      target = target.parentNode.parentNode;
    }
  }

  render() {
    var data = [];

    if (this.state.data) {
      data = this.state.data;
      //var f = document.getElementsByClassName("client-list-item");
      // console.log("F", f.item(0));
      // list_it.classList.add("it_active");
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-5">
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
              id_cl={this.state.id_cl}
              update={this.updateData.bind(this)}
            />
          </div>

          <div className="col-md-9 col-7">
            <Client
              data={data}
              id_cl={this.state.id_cl}
              filter={this.state.filter}
              f_flag={this.state.f_flag}
              id_cl={this.state.id_cl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  state: state
}))(App);
