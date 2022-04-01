import { Link } from "@mui/material";
import background from "./LargePlant.jpg";

const MyBanner = () => {
  return (
    <article
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
        // backgroundPosition: "center"
      }}
    >
      <p
        style={{
          textAlign: "left",
          fontSize: "30px",
          color: "white",
          paddingTop: "30px",
          paddingLeft: "30px"
        }}
      >
        Title of a longer featured <br></br>blog post
      </p>
      <p
        style={{
          color: "white",
          fontSize: "20px",
          textAlign: "left",
          marginLeft: "30px"
        }}
      >
        Multiple lines of text that form the lede, informing <br></br> new
        readers quickly and efficiently about what's <br></br> most interesting
        in this post's contents
      </p>
      <div
        style={{
          padding: "30px",
          textAlign: "left"
        }}
      >
        <Link to="#">Continue reading...</Link>
      </div>
    </article>
  );
};

export default MyBanner;
