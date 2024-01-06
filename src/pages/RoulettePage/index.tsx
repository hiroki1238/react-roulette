import { tss } from "tss-react";
import Roulette from "../../components/Roulette";
import NameRegisteration from "../../components/NameRegisteration";
import { useState } from "react";

const useStyles = tss.create({
  root: {
    color: "black",
    fontSize: 38,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const CustomRoulettePage = () => {
  const { classes } = useStyles();
  const [names, setNames] = useState<{ option: string }[]>([]);

  return (
    <div className={classes.root}>
      {names.length === 0 ? (
        <NameRegisteration setNames={setNames} />
      ) : (
        <Roulette names={names} />
      )}
    </div>
  );
};

export default CustomRoulettePage;
