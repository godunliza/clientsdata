import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./filter";
import load from "../utils/load";
import ClientList from "./ClientList";
import "bootstrap/dist/css/bootstrap.min.css";
import Client from "./Client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faAt} from '@fortawesome/free-solid-svg-icons'

//library.add(faAt);

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
    }

    return (
      <div className="container-fluid  page">
        <div className="row">
          <div className="col-md-3">
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

          <div className="col-md-9">
            <Client
              data={data}
              id_cl={this.state.id_cl}
              filter={this.state.filter}
              f_flag={this.state.f_flag}
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
