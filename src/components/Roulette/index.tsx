import { Button } from "@mui/material";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { tss } from "tss-react";

interface RouletteProps {
  names: { option: string }[];
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
  roulette: {
    transform: "rotate(-138deg) scale(1.8)",
    marginBottom: 230,
  },
  result: {
    color: "black",
    fontWeight: "bold",
    height: 300,
    marginTop: 30,
  },
});

const Roulette: React.FC<RouletteProps> = ({ names }) => {
  const { classes } = useStyles();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedName, setSelectedName] = useState("");

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * names.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div>
      <div
        className={classes.result}
        style={{ visibility: selectedName ? "visible" : "hidden" }}
      >
        🎉 {selectedName || " "}が選ばれました 🎉
      </div>
      <div>
        <div className={classes.roulette}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={names}
            outerBorderColor={"gray"}
            outerBorderWidth={10}
            innerRadius={26}
            innerBorderColor={"gray"}
            innerBorderWidth={8}
            radiusLineColor={"gray"}
            radiusLineWidth={4}
            perpendicularText={false}
            backgroundColors={[
              "#6e4a55",
              "#008b8b",
              "#4682b4",
              "#665a5e",
              "#043c78",
            ]}
            disableInitialAnimation
            spinDuration={0.6}
            onStopSpinning={() => {
              setMustSpin(false);
              setSelectedName(names[prizeNumber].option);
            }}
            pointerProps={{
              src: "../../../src/assets/logo.svg",
              style: {
                position: "absolute",
                transform: "rotate(137deg)",
                width: "20%",
              },
            }}
          />
        </div>
        <div>
          <Button
            onClick={handleSpinClick}
            className={classes.button}
            disabled={names.length === 0}
          >
            スタート
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
