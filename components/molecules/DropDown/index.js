import React from "react";

import TextField from "@material-ui/core/TextField";

import { Typography } from "@material-ui/core";

// import Colors from '../../../Constants/colors';

export default function CustomizedSelects(props) {
  const handleChange = (event) => {
    if (event.target.value === "Custom") return props.setDatePicker(true);
    // setAge(event.target.value);
    //

    return props.onChange(event);
  };
  const { optionList, textFieldProps, hideCustomLabel, labelProps, label } = props;
  return (
    <>
      {hideCustomLabel ? null : (
        <Typography variant="caption" color="textSecondary" {...labelProps}>
          {label}
        </Typography>
      )}
      <TextField
        required={props.required}
        select
        SelectProps={{
          native: true,
        }}
        size={props.size ? props.size : "small"}
        fullWidth
        variant="outlined"
        onChange={handleChange}
        {...textFieldProps}
      >
        {/* (event) => {
          handleChange({ target: { ...event.target, name: event.target.selectedOptions[0].getAttribute('name') } });
        } */}
        {optionList && optionList.length
          ? optionList.map((item) => {
              return (
                <option key={item && item[props.optionValue]} name={item[props.optionLabel]} style={{ color: "black" }} value={item && item[props.optionValue]}>
                  {(item && item[props.optionLabel]) || ""}
                </option>
              );
            })
          : null}
      </TextField>
    </>
  );
}
