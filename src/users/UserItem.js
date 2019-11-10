import React from "react";
import propTypes from "prop-types";

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt="user img"
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired
};
export default UserItem;
