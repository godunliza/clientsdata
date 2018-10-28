import React from "react";

export default ({ term, data, update, filter, f_flag }) => {
  const dataSearch = e => {
    var filter = [];
    const value = e.target.value.toLowerCase();

    filter = data.filter(user => {
      return (
        user.general.firstName.toLowerCase().includes(value) ||
        user.general.lastName.toLowerCase().includes(value)
      );
    });
    console.log(filter);

    if (!value) {
      console.log("Clean");
      filter = data;
    }
    update({
      filter: filter,
      active: 0,
      term: value,
      f_flag: true
    });
  };

  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={dataSearch}
      />
    </div>
  );
};
