import MyBanner from "./Banner";
import MultiActionAreaCard from "./Cards";
import SimpleBottomNavigation from "./Footer";
import Mynavbar from "./Mynavbar";
import "./styles.css";
import Types from "./Type";

export default function App() {
  return (
    <div
      className="App"
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        border: "1px solid black",
        padding: "20px"
      }}
    >
      <Mynavbar />
      <MyBanner />
      <MultiActionAreaCard />
      <Types />
      <SimpleBottomNavigation />
    </div>
  );
}
