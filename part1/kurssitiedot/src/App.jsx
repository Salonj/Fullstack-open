const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <div>
      <p>{props.pt} {props.ex}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part pt={props.pt1.name} ex={props.pt1.exercises}/>
      <Part pt={props.pt2.name} ex={props.pt2.exercises}/>
      <Part pt={props.pt3.name} ex={props.pt3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content pt1={parts[0]} pt2={parts[1]} pt3={parts[2]}/>
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises}/>
    </div>
  )
}

export default App