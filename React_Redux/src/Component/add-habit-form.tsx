import { Box, FormControl, InputLabel, TextField, Select, MenuItem, Button } from "@mui/material"
import React,{useState} from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../Store/store"
import { addHabit } from "../Store/habit-slice"

const AddHabitForm:React.FC = () => {
    const [name, setName] = useState<string>("")
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily") // <"daily" | "weekly">: This specifies that the frequency state can only hold one of two string values: "daily" or "weekly"

    const dispatch = useDispatch<AppDispatch>() // type was exported from the store


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(name.trim()){
            dispatch(addHabit({name,frequency}))
        }
        setName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}
            >
                <TextField 
                    label= "Habit Name"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Habit Name"
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select value={frequency}
                    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}>
                        <MenuItem value="daliy">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Add Habit
                </Button>

            </Box>
        </form>
  )
}

export default AddHabitForm