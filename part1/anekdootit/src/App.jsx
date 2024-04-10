import { useState } from 'react'

const Anecdotes = (props) => {
  return (
    <div>
      <div>
      {props.anecdotes}
      </div>
      <div>
        has {props.votes} votes
      </div>
    </div>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(new Array(anecdotes.length).fill(0))

  const nextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
   
  const votesClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVoted(newVotes)
  }
  
  const mostVotes = Math.max(...votes)
  const i = votes.indexOf(mostVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={votesClick} text="vote" />
      <Button handleClick={nextClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdotes anecdotes={anecdotes[i]} votes={votes[i]} />
    </div>
  )
}

export default App