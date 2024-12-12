import { AppDispatch, RootState } from '../Store/store'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHabits } from "../Store/habit-slice"

const HabitStats = () => {
    // const { habits,isLoading,error } = useSelector((state: RootState) => state.habits)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchHabits());
    }, [])

    return (
        <div>
            Habit Stats
        </div>
    )
}

export default HabitStats