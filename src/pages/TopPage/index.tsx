import { tss } from "tss-react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const useStyles = tss.create({
  root: {
    color: "white",
    fontSize: 44,
    marginTop: 200,
  },
  button: {
    color: "black",
    fontSize: 16,
    fontWeight: "bolder",
    border: "4px solid",
    borderRadius: 12,
    padding: "10px 20px",
    margin: 4,
    ":hover": {
      color: "white",
      borderColor: "white",
    },
  },
});

const TopPage = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.root}>
        <p>こんにちは</p>
        <Button
          className={classes.button}
          onClick={() => navigate("/roulette")}
        >
          ルーレット
        </Button>
      </div>
    </>
  );
};

export default TopPage;
