import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { tss } from "tss-react";
import logo from "/logo.svg?url";

interface RouletteProps {
  names: { option: string }[];
}

const useStyles = tss.create({
  button: {
    color: "black",
    fontSize: 22,
    fontWeight: "bolder",
    padding: "8px 20px",
    border: "4px solid",
    borderRadius: 12,
    ":hover": {
      color: "white",
      borderColor: "white",
    },
  },
  roulette: {
    transform: "rotate(-138deg) scale(1.8)",
    marginBottom: 200,
  },
  result: {
    color: "black",
    fontWeight: "bold",
    height: 300,
    marginTop: 24,
    lineHeight: 2.5,
  },
});

const Roulette: React.FC<RouletteProps> = ({ names }) => {
  const { classes } = useStyles();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * names.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <div
        className={classes.result}
        style={{ visibility: selectedName ? "visible" : "hidden" }}
      >
        🎉 {selectedName || " "}が選ばれました 🎉
      </div>
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
          spinDuration={0.65}
          onStopSpinning={() => {
            setMustSpin(false);
            setSelectedName(names[prizeNumber].option);
          }}
          pointerProps={{
            src: logo,
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
    </>
  );
};

export default Roulette;
