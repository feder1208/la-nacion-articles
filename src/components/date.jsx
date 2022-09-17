import React from "react";

function SetDate(props) {
  const renderDate = () => {
    let date = new Date(props.date);
    let options = { year: "numeric", month: "long", day: "numeric" };
    let formatDate = date.toLocaleDateString(undefined, options);
    return formatDate;
  };

  return <h4 className="com-date">{renderDate()}</h4>;
}

export { SetDate };
