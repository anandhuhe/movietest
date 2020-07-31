import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, InputAdornment } from "@material-ui/core";
// import Colors from '../../.././Constants/colors';
import { Close } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '0px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     borderRadius: '4px',
//     border: `1px solid ${Colors.default}`,
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   iconButton: {
//     padding: 7.5,
//   },
// }));

const SearchBox = (props) => {
  const [searchButton, setSearchButton] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState(true);
  const textRef = React.createRef();

  React.useEffect(() => {
    if (props.textFieldProps && props.textFieldProps.defaultValue) {
      setSearchButton(false);
    }
  }, []);

  const onClickButton = () => {
    if (searchButton && searchValue !== "" && textRef.current.value !== "") {
      setSearchButton(false);
      if (props.onSearch) props.onSearch(searchValue);
    } else {
      setSearchButton(true);
      textRef.current.value = "";
      if (props.removeSearch) props.removeSearch();
    }
  };

  const onChangeText = (event) => {
    setSearchValue(event.target.value);
  };

  const keyPress = (event) => {
    if (event.keyCode === 13 && searchValue) {
      onClickButton();
    }
  };
  return (
    <TextField
      inputRef={textRef}
      fullWidth
      placeholder="Search"
      size="small"
      onChange={(event) => onChangeText(event)}
      onKeyDown={(e) => keyPress(e)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton style={{ padding: 5, marginBottom: 5, marginTop: 5 }} onClick={() => onClickButton()}>
              {searchButton ? <SearchIcon /> : <Close />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props.textFieldProps}
      variant="outlined"
    />
  );
};

export default SearchBox;
