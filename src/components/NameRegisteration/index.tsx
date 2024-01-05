import { Button } from "@mui/material";
import { useState } from "react";
import { tss } from "tss-react";

interface NameRegisterationProps {
  setNames: React.Dispatch<React.SetStateAction<{ option: string }[]>>;
}

const useStyles = tss.create({
  button: {
    color: "black",
    fontSize: 24,
    fontWeight: "bolder",
    padding: "10px 20px",
    border: "4px solid",
    borderRadius: 12,
    ":hover": {
      color: "white",
      borderColor: "white",
    },
  },
  textArea: {
    color: "navy",
    fontWeight: "bolder",
    fontSize: 36,
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "black",
    borderRadius: 20,
    height: 200,
    width: 480,
    padding: 12,
  },
});

const NameRegisteration: React.FC<NameRegisterationProps> = ({ setNames }) => {
  const { classes } = useStyles();
  const [inputNames, setInputNames] = useState("");

  const handleRegisterClick = () => {
    setNames(
      inputNames
        .split(",")
        .map((name) => name.trim())
        .filter((name) => name.length > 0)
        .map((name) => ({
          option: name,
          style: {
            textColor: "white",
            fontSize: 14,
            fontWeight: "bolder",
          },
        })),
    );
    setInputNames("");
  };

  return (
    <div>
      <p>名前を登録してください（カンマ区切り）</p>
      <div>
        <textarea
          value={inputNames}
          onChange={(e) => setInputNames(e.target.value)}
          className={classes.textArea}
        />
      </div>
      <Button onClick={handleRegisterClick} className={classes.button}>
        登録
      </Button>
    </div>
  );
};

export default NameRegisteration;
