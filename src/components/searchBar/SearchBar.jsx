import styled from "@emotion/styled";
import { SearchOutlined } from "@mui/icons-material";
import { alpha, InputBase } from "@mui/material";
import theme from "../../theme";

const Search = styled("div")(() => ({
  position: "relative",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 1, 1, 0),
    minWidth: "100%",
    marginRight: theme.spacing(1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchOutlined />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
}
