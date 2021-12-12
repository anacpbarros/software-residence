import PropTypes from "prop-types";

import img from "../../assets/Ana_Claudia.jpg";

import "./UserIdentification.css";

function UserIdentification({ children }) {
  return (
    <div className="container-user-identification">
      <img alt={children} src={img} />
      <p>{children}</p>
    </div>
  );
}

UserIdentification.prototype = {
  children: PropTypes.string,
};

export default UserIdentification;
