import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
//import SimpleListMenu from "../SimpleListMenu";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

const SimpleTable = (props) => {
  const classes = useStyles();
  const { showActionMenu = true, anchorEl, setAnchorEl, onCloseMenu, headerColor, orderBy, order, handleTableSort } = props;
  const currentPage = props.page * props.perPage ? props.page * props.perPage - props.perPage + 1 : 1;
  const noOfPages = props.perPage * props.page > props.totalCount ? props.totalCount : props.perPage * props.page;
  const paginationFinder = () => `Showing ${currentPage} - ${noOfPages} of ${props.totalCount}`;

  return (
    <>
      {!props.disablePagination && props.totalCount > props.perPage ? (
        <Grid container direction={isWidthDown("sm", props.width) ? "column" : "row"} justify={isWidthDown("sm", props.width) ? "center" : "flex-end"} alignItems="center">
          <Typography variant="body1" color="textSecondary" style={{ display: "flex", alignItems: "center", margin: "10px 10px 10px 0px" }}>
            {paginationFinder()}
          </Typography>

          <Pagination
            size="medium"
            shape="round"
            count={Math.ceil((props.totalCount && props.totalCount) / props.perPage) || 0}
            color="primary"
            onChange={(event, page) => {
              props.handlePagination(event, page);
            }}
            page={props.page}
          />
        </Grid>
      ) : null}
      {/* {showActionMenu ? <SimpleListMenu anchorEl={anchorEl} options={props.menuOptions} handleMenuItemClick={(options) => props.handleMenuItemClick(options)} onClose={() => setAnchorEl(null)} onCloseMenu={onCloseMenu} /> : null} */}
    </>
  );
};
export default withWidth()(SimpleTable);
