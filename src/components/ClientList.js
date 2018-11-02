import React from "react";
import { connect } from "react-redux";
import "../styles.css";

export default ({ data, filter, f_flag, update, id_cl }) => {
  if (f_flag) {
    data = filter;
  }
  const item_cl = e => {
    var target = e.target;
    if (target.tagName !== "DIV") {
      target = target.parentNode.parentNode.parentNode;
    }
    update({
      id_cl: target.id
    });
  };

  return (
    <div className="client-list">
      {data.map((first, i) => {
        return (
          <div id={i} onClick={item_cl} className="client-list-item">
            <div className="media  ">
              <div className="media-left cl-list-img ">
                <img
                  className=" media-object cl-list-img "
                  src={String(first.general.avatar)}
                />
              </div>
              <div className="media-body">
                <h4 className="media-heading ">
                  {first.general.firstName} {first.general.lastName}
                </h4>

                <h6 class="text-muted">{first.job.title}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
