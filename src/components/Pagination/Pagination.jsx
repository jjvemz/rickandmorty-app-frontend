import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0",
    gap: "0.5rem",
    "& .MuiPagination-root": {
      "& .MuiPaginationItem-root": {
        fontSize: "inherit",
      },
      "& .MuiPaginationItem-page": {
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
      "& .MuiPaginationItem-previous, & .MuiPaginationItem-next": {
        fontSize: "1.2rem",
        borderRadius: "50%",
        padding: "0.5rem",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
    },
  },
}));


const Paginationcomponent = ({ pageNumber, info, setPageNumber }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  const handlePageChange = (e, page) => {
    setPageNumber(page);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className={classes.pagination}>
      <Pagination
        count={info?.pages}
        page={pageNumber}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
        size={width < 576 ? "small" : "medium"}
        siblingCount={width < 576 ? 1 : 2}
        hidePrevButton={width < 768}
        hideNextButton={width < 768}
      />
    </div>
  );
};

export default Paginationcomponent;
