import React from "react";
import { connect } from "react-redux";

const Github = (props) => {
  console.log(props.data);
  return (
    <div>
      <h1>name : {props.data.name}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.GithubReducer,
  };
};

export default connect(mapStateToProps, null)(Github);
