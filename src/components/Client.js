import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

export default ({ data, id_cl, f_flag, filter }) => {
  console.log("ID", id_cl);

  if (!id_cl) {
    id_cl = "0";
  }

  if (f_flag) {
    data = filter;
  }

  var img, fio, job, email, phone, address;
  var ic_m, ic_ph;
  console.log("flag", f_flag);
  console.log("Data", data);

  if (data) {
    data.map((first, i) => {
      if (String(i) === id_cl) {
        console.log("Datatru");
        console.log("Id", id_cl);
        img = first.general.avatar;
        console.log("IDimg", img);
        fio = first.general.firstName + " " + first.general.lastName;
        job = first.job.title + "-" + first.job.company;
        email = first.contact.email;
        phone = first.contact.phone;
        address =
          first.address.country +
          " " +
          first.address.city +
          " " +
          first.address.street +
          " " +
          first.address.zipCode;
        ic_m = <FontAwesomeIcon icon={faAt} />;
        ic_ph = <FontAwesomeIcon icon={faMobile} />;
        console.log(data[id_cl]);
        console.log("Person_general_map", fio, job, email, phone, address);
      }
    });
  }

  return (
    <div className="client-details ">
      <div className="media">
        <div className="media-left">
          <img
            src={img}
            className="cl-det-img img-fluid d-sm-none d-md-block"
          />
        </div>

        <div className="media-body cl-det-inf ">
          <h1 className="display-4 ">{fio}</h1>
          <h3 className="lead">{job}</h3>

          <p>
            {ic_m} {email}
          </p>
          <p>
            {ic_ph} {phone}
          </p>

          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};
