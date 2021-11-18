import PropTypes from "prop-types";

import UserIdentification from "../UserIdentification/UserIdentification";

import "./Header.css";

function Header({ children, title }) {
  return (
    <div className="div-header">
      <h3>{title}</h3>
      <UserIdentification>{children}</UserIdentification>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
