import styles from './TasksHeader.module.css'


interface TasksHeaderProps {
    totalTasks: number
    totalTasksCompleted: number
}

export function TasksHeader(props: TasksHeaderProps) {
    const { totalTasks, totalTasksCompleted } = props
    return (
        <div className={styles.tasksHeader}>
            <div className={styles.createdTasks}>
                <strong>
                    Tarefas Criadas
                    <span>
                        {totalTasks}
                    </span>
                </strong>
            </div>
            <div className={styles.createdTasks}>
                <strong>
                    Concluidas
                    <span>
                        {totalTasksCompleted}
                    </span>
                </strong>
            </div>
        </div>
    )
}