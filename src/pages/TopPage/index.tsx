import { tss } from 'tss-react'
import Button from '@mui/material/Button'

const useStyles = tss.create({
  root: {
    color: 'white',
    fontSize: 44
  },
  button: {
    color: 'black',
    fontSize: 16,
    border: '2px solid',
    borderRadius: 12,
    ":hover": {
      color: 'white',
      borderColor: 'white',
    }
  }
});

const TopPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.root}>こんにちは</div>
      <Button className={classes.button}>ボタン1</Button>
      <Button className={classes.button}>ボタン2</Button>
    </>
  )
};

export default TopPage;
