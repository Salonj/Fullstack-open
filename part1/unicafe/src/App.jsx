import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  if (sum === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />
          <StatisticLine text='all' value={sum} />
          <StatisticLine text='average' value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / sum} />
          <StatisticLine text='positive' value={((props.good / sum) * 100) + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGoodValue = () => {
    setGood(good + 1)
  }

  const handlSetNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleSetBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleSetGoodValue} text='good' />
      <Button handleClick={handlSetNeutral} text='neutral' />
      <Button handleClick={handleSetBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
