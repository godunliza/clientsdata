import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Col, Row, Media } from "reactstrap";

export default ({ data, filter, f_flag }) => {
  console.log("DataClientList", data);
  if (f_flag) {
    data = filter;
  }
  return (
    <div>
      {data.map((first, i) => {
        return (
          <div className="container-fluid">
            <div className="col-md-1">
              <img src={String(first.general.avatar)} />

              <h3>
                {first.general.firstName} {first.general.lastName}
              </h3>

              <h5>{first.job.title}</h5>
            </div>
          </div>
        );
      })}
    </div>
    /*<div>
      {fio.map((first, i) => {
        return (
          <div className="container-fluid">
            <div className="col-md-1">
              <img src={String(avatar_url[i])} />

              <h3>{fio[i]}</h3>

              <h5>{jobname[i]}</h5>
            </div>
          </div>
        );
      })}
    </div>*/
  );
};
