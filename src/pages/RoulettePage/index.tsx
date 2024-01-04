import React, { useState } from 'react'
import { Roulette, useRoulette } from 'react-hook-roulette'
import { tss } from 'tss-react'
import Button from '@mui/material/Button'

const useStyles = tss.create({
  root: {
    color: 'white',
    fontSize: 44,
  },
  logo: {
    width: 84,
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
  },
  textArea: {
    color: 'navy',
    fontWeight: 'bold',
    fontSize: 32,
    backgroundColor: 'white',
    border: '2px solid',
    borderColor: 'black',
    borderRadius: 20,
    height: 200,
    width: 360,
    padding: 12,
  }
})

const RoulettePage = () => {
  const { classes } = useStyles()
  const [input, setInput] = useState('')
  const [names, setNames] = useState<string[]>([])
  const { roulette, result, onStart, onStop } = useRoulette({
    items: names.map(name => ({ name })),
    options: {
      size: 800, // 本体のサイズ
      initialAngle: 0,
      rotationDirection: 'clockwise', // 回転方向
      maxSpeed: 18, // 最大速度
      acceleration: 0.8, // 加速度
      deceleration: 0.05, // 減速度
      determineAngle: 0,
      showArrow: true,
      style: {
        canvas: {
          bg: 'transparent',
        },
        label: {
          font: 'bold 28px Arial',
          defaultColor: 'black',
          baseline: 'middle',
        },
        arrow: {
          bg: 'chocolate',
          size: 40,
        },
        pie: {
          border: true, // 仕切り
          borderColor: 'navy',
          borderWidth: 6,
          theme: [
            { bg: '#6e4a55', color: 'white' },
            { bg: '#008b8b', color: 'white' },
            { bg: '#4682b4', color: 'white' },
            { bg: '#665a5e', color: 'white' },
            { bg: '#043c78', color: 'white' },
          ],
        },
      },
    },
  })

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setInput(event.target.value)
  }

  const handleRegisterClick = () => {
    setNames(input.split(','))
    setInput('')
  }

  const handleRemoveClick = () => {
    setNames(names.filter(name => name !== result))
  }

  return (
    <div className={classes.root}>
      <textarea value={input} className={classes.textArea} onChange={handleInputChange} />
      <Button className={classes.button} onClick={handleRegisterClick}>登録</Button>
      <Roulette roulette={roulette} />
      <Button className={classes.button} onClick={onStart}>スタート</Button>
      <Button className={classes.button} onClick={onStop}>ストップ</Button>
      {result && (
        <div>
          <div>🎉 {result}が選ばれました 🎉</div>
          <Button className={classes.button} onClick={handleRemoveClick}>除外</Button>
        </div>
      )}
    </div>
  )
}

export default RoulettePage
