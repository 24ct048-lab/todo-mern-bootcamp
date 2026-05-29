import {useState} from 'react'
import {Card} from './Card'
import {Input} from './Input'
const initialTasks = [
        {id:0, text: "ONE"},
        {id:1, text:"Two"},
        {id:2, text:"Three"},
    ]

export const Tasks = ()=>{
    const [ tasks,setTasks] = useState(initialTasks)
    const addTaskHandler = (newTask)=>{
        setTasks((prev)=>{
            return [
                ...prev,
                {
                    id:Math.random(),
                    text: newTask
                }
            ]
        })
    }

    const deleteTaskHandler = (completedId)=>{
        setTasks((prev)=>{
            return prev.filter((task)=>task.id !== completedId)
        })
    }
    return (
        <div className='tasks'>
            <h1>Tasks</h1>
            <Input onAddTask = {addTaskHandler}/>
            {tasks.map((task)=>{
                return <Card key={task.id} id={task.id} text={task.text} onTaskComplete={deleteTaskHandler}/>
            })}
               
        </div>
    )
}