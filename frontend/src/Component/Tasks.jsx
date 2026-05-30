import {useState,useEffect} from 'react'
import {Card} from './Card'
import {Input} from './Input'
import axios from 'axios'
// const initialTasks = [
//         {id:0, text: "ONE"},
//         {id:1, text:"Two"},
//         {id:2, text:"Three"},
//     ]

export const Tasks = ()=>{
    const [ tasks,setTasks] = useState([])
    
    const fetchTasks = async ()=>{
        try{
            const response = await axios.get("http://localhost:8080/")
            console.log(response)
            setTasks(response.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{fetchTasks()},[])

    const addTaskHandler = async (newTask)=>{
        try{
            const body = {
                "activity_id":Math.random(),
                "todo_description":newTask
            }
            await axios.post("http://localhost:8080/create",body)
            await fetchTasks()
        }catch(error){
            console.log(error)
        }
    }

    const deleteTaskHandler = async (completedId)=>{
        try{
             await axios.delete(`http://localhost:8080/${completedId}`)
             await fetchTasks()
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className='tasks'>
            <h1>Tasks</h1>
            <Input onAddTask = {addTaskHandler}/>
            {tasks.map((task)=>{
                return <Card key={task.activity_id} id={task.activity_id} text={task.todo_description} onTaskComplete={deleteTaskHandler}/>
            })}
               
        </div>
    )
}


// `localhost ${ddd}`
// "localhost/"+ddd