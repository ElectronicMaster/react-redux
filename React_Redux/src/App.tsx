import { useState } from 'react'
import { Container, Typography } from '@mui/material'
import AddHabitForm from './Component/add-habit-form'
import HabitList from './Component/habit-list'
import HabitStats from './Component/habit.state'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Container maxWidth='md'>
        <Typography component={'h1'} variant={'h2'} align={"center"}>Habit Tracker</Typography>
        <AddHabitForm/>
        <HabitList/>
        <HabitStats/>
      </Container>
    </div>
  )
}

export default App
