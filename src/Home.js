import "./index.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const Home = () => {
  const onsubmit = (name) => {
    console.log(name);
  };
  return (
    <div className="app">
      <Box className="nav">
        <h1 className="header"> My Tutor</h1>
      </Box>
      <Box className="main">
        <h1 className="character">Choose your Tutor!</h1>
        <div>
          <Button
            className="button"
            onClick={() => {
              onsubmit("zoro");
            }}
          >
            Roronoa Zoro
          </Button>
          <Button
            className="button"
            onClick={() => {
              onsubmit("deadpool");
            }}
          >
            Deadpool
          </Button>
          <Button
            className="button"
            onClick={() => {
              onsubmit("hermoine");
            }}
          >
            Hermione Granger
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Home;
