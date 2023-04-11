import styles from './TasksContainer.module.css'
import { PlusCircle } from 'phosphor-react'
import { TasksHeader } from './TasksHeader'
import { ListTask } from './ListTasks'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'



export function TasksContainer() {
    // vai ser responsável por armazenar o valor que vem do textarea
    const [textareaTaskName, setTextareaTaskName] = useState('')


    const [tasks, setTasks] = useState<{ id: number; content: string; checked: boolean }[]>([
    ])

    const totalTasks = tasks.length
    const totalTasksCompleted = tasks.filter(task => task.checked === true).length

    const handleToggleCheck = (taskId: number) => {
        // Armazena o novo valor de array com o checked alterado para o ID que foi informado
        const tasksChanged = tasks.map(task => {
            // Se a task corrente for a mesma do ID onformado
            if (task.id === taskId) {
                return { ...task, checked: !task.checked }
            } else {
                return task;
            }
        })

        setTasks(tasksChanged)
    }


    // essa função tem o objetivo de receber o valor do textarea toda vez que o valor for alterado
    const handleChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaTaskName(event.target.value)
    }

    const handleAddTask = (event: FormEvent) => {
        event.preventDefault()

        // vai adicionar/fazer push da task que foi escrita no textarea e jogar 
        // para dentro da array de tasks
        setTasks([{ id: Math.random(), content: textareaTaskName, checked: false }, ...tasks])
        setTextareaTaskName('')
    }



    const handleNewTaskInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        if (textareaTaskName.length === 0) {
            event.target.setCustomValidity('Esse campo deve ser preenchido AGORA!')
        } else {
            event.target.setCustomValidity('')
        }
    }

    const handleDeleteTask = (taskId: number) => {
        // filtrar todas as tasks exceto a que tem esse ID do parametro
        const tasksWithoutID = tasks.filter(task => task.id !== taskId)
        // Atualiza a array de tasks com essa nova array que não possui a task com o ID
        setTasks(tasksWithoutID)
    }

    return (
        <main>
            <div>
                <form onSubmit={handleAddTask} className={styles.textContent}>
                    <textarea
                        name='textContent'
                        placeholder='Alguma idéia?'
                        onChange={handleChangeTextarea}
                        value={textareaTaskName}
                        onInvalid={handleNewTaskInvalid}
                        required
                    />
                    <button type='submit' >
                        Criar
                        <PlusCircle size={25} />
                    </button>
                </form>

                <div >
                    <TasksHeader totalTasks={totalTasks} totalTasksCompleted={totalTasksCompleted} />
                </div>
            </div >
            <div>
                <ListTask listTasks={tasks} onDeleteTask={handleDeleteTask} onChangeCheck={handleToggleCheck} />
            </div>
        </main>
    )
}