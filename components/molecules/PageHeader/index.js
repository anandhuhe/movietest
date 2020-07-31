import React from "react";
import { Grid, Typography, Button, CircularProgress } from "@material-ui/core";
import DropDown from "../DropDown";
import SearchBox from "../SearchBox";
import SvgResize from "../../../Assets/SVG/Resize";
import SvgTick from "../../../Assets/SVG/Tick";

const PageHeader = ({
  title,
  showDropdown,
  showSearchBox,
  dropDownOptions,
  downSm,
  handleSearch,
  handleChange,
  loader,
  dropdownLabel,
  btnTitle,
  hideActionButton,
  showRearrangeButton,
  rearrangeBtnTitle,
  isRearrange,
  rearrangeButtonOnClick,
  onClick,
  showSecondDropdown,
  secondDropdownLabel,
  secondDropdownOptions,
  secondDropdownHandleChange,
  optionLabel,
  optionValue,
  secondOptionValue,
  secondOptionLabel,
  dropDownValues,
  searchValues,
}) => {
  let dropdownProps1 = {};
  let dropdownProps2 = {};
  let searchBoxValues = {};
  if (searchValues && searchValues.value1) searchBoxValues = { defaultValue: (searchValues && searchValues.value1) || "all" };
  if (dropDownValues && dropDownValues.value1) dropdownProps1 = { value: (dropDownValues && dropDownValues.value1) || "all" };
  if (dropDownValues && dropDownValues.value2) dropdownProps2 = { value: (dropDownValues && dropDownValues.value2) || "" };

  return (
    <Grid container display="flex" justify="space-between" direction="row" alignItems="center" style={{ width: "100%" }}>
      <Typography variant="h5" style={{ minWidth: "238px" }}>
        {title}
      </Typography>
      <Grid direction="row" style={{ display: "flex", alignItems: "center" }}>
        {!downSm && showDropdown ? (
          <Grid style={{ marginRight: "1rem" }}>
            <DropDown textFieldProps={{ label: dropdownLabel, InputLabelProps: { shrink: true }, ...dropdownProps1 }} onChange={(event) => handleChange(event)} optionValue={optionValue} optionLabel={optionLabel} optionList={dropDownOptions} />
          </Grid>
        ) : null}
        {!downSm && showSecondDropdown ? (
          <Grid style={{ marginRight: "1rem" }}>
            <DropDown textFieldProps={{ label: secondDropdownLabel, InputLabelProps: { shrink: true }, ...dropdownProps2 }} onChange={(event) => secondDropdownHandleChange(event)} optionValue={secondOptionValue} optionLabel={secondOptionLabel} optionList={secondDropdownOptions} />
          </Grid>
        ) : null}
        {!showSearchBox ? null : (
          <Grid style={{ marginRight: "1rem", minWidth: "280px" }}>
            <SearchBox textFieldProps={{ ...searchBoxValues }} onSearch={(value) => handleSearch(value)} removeSearch={async () => handleSearch(null)} />
          </Grid>
        )}
        {showRearrangeButton ? (
          <Button buttonStyle={{ position: "relative" }} style={{ marginRight: "1rem", minWidth: 150 }} variant={isRearrange ? "contained" : "outlined"} color="primary" onClick={() => rearrangeButtonOnClick()} disabled={loader ? true : false}>
            {loader ? (
              <CircularProgress size={22} color="primary" />
            ) : (
              <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {isRearrange ? <SvgTick style={{ fill: "#fff", width: 20, height: 20, marginRight: 5 }} /> : <SvgResize style={{ fill: "#2554F2", width: 20, height: 20, marginRight: 5 }} />}
                {rearrangeBtnTitle}
              </Grid>
            )}
          </Button>
        ) : null}
        {hideActionButton ? null : (
          <Button variant="contained" color="primary" onClick={() => onClick()} disabled={loader ? true : false}>
            {loader ? <CircularProgress size={22} color="primary" /> : btnTitle}
          </Button>
        )}
      </Grid>

      {/* <Grid container direction="row" justify="flex-end" alignItems="center">
        {downSm && props.showDropdown ? (
          <Fab
            size="medium"
            color="primary"
            style={{ position: 'fixed', right: 30, bottom: 30 }}
            onClick={() => handleDropDownClick()}
          >
            <SvgFilter style={{ padding: '10px', fill: 'white' }} />
          </Fab>
        ) : null}
      </Grid>

      {downSm && props.showDropdown ? (
        <HalfDrawer
          customWidth={'100%'}
          open={clickedDropDowns}
          setIsHalfDrawerOpen={() => setClickedDropDowns(false)}
          subRenderComponent={
            <Grid container spacing={3}>
              <Grid item xs={12} style={{ marginRight: '1rem' }}>
                <Dropdown
                  textFieldProps={{ label: 'City', value: props.cityIdToFilter, InputLabelProps: { shrink: true } }}
                  onChange={(event) => handleChange(event)}
                  optionList={
                    cities && cities.length
                      ? [{ value: '', label: 'All' }, ...cities.map((city) => ({ value: city._id, label: city.name }))]
                      : []
                  }
                />
              </Grid>
            </Grid>
          }
          drawerActions={[
            {
              btnTitle: 'CANCEL',
              onClick: () => setClickedDropDowns(false),
            },
            { btnTitle: 'APPLY', onClick: () => setClickedDropDowns(false) },
          ]}
        />
      ) : null} */}
    </Grid>
  );
};

export default PageHeader;
