import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
//import {Grid, Col,Row,Media} from 'reactstrap';

export default ({ data, update, index }) => {
  var firstName = [],
    lastName = [],
    avatar_url = [],
    jobname = [];
  if (data) {
    data.map(function(obj, index) {
      firstName[index] = obj.general.firstName;
      lastName[index] = obj.general.lastName;
      avatar_url[index] = obj.general.avatar;
      jobname[index] = obj.job.title;
      console.log(avatar_url[0]);
    });
  }

  return (
    <div className="container">
      <img src={String(avatar_url[1])} />
      <h3>
        {firstName[1]}
        {lastName[1]}
      </h3>
      <h5>{jobname[1]}</h5>
    </div>
  );
};
