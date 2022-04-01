import * as React from "react";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Mynavbar = () => {
  const NavbarStyleh = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px"
  };
  const NavbarStyle = {
    color: "black"
  };

  const btn = {
    textalign: "left"
  };

  return (
    <div className="maincontainer">
      <div
        className="header"
        style={{
          borderBottom: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgba(52, 52, 52, 0.2)"
        }}
      >
        <Button style={{ btn, paddingLeft: "40px" }} className="subscribe">
          SUBSCRIBE
        </Button>
        <p className="title" style={{ fontWeight: "bolder", fontSize: "20px" }}>
          Blog
        </p>
        <div
          className="rightstuff"
          style={{ marginRight: "20px", margin: "20px" }}
        >
          <SearchIcon
            className="SearchIcon"
            style={{ marginRight: "20px" }}
            color="primary"
          />
          <Button variant="outlined">SIGN UP</Button>
        </div>
      </div>

      <div className="container space-around" style={NavbarStyleh}>
        <Link style={NavbarStyle} component="button" variant="body2">
          Technology
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Design
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Culture
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Business
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Politics
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Opinion
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Science
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Health
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Style
        </Link>
        <Link style={NavbarStyle} component="button" variant="body2">
          Travel
        </Link>
      </div>
    </div>
  );
};

export default Mynavbar;
