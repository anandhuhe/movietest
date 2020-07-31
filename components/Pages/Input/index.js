import React from "react";
const Input = ({ value, onChange, onClick }) => {
  console.log(value, "value");
  return (
    <div className="row">
      <div className="input-field col s6 offset-s3">
        <input autoFocus value={value} onChange={onChange} type="text" className="center white-text" style={{ fontSize: 21 }} />
        <button onClick={onClick} className="waves-effect waves-light btn-large">
          <i className="material-icons left">search</i>
          Search
        </button>
      </div>
    </div>
  );
};
export default Input;
