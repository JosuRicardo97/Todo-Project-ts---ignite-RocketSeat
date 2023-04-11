import styles from './ListTasks.module.css'
import { TaskItem } from './TaskItem'
import Clipboard from '../assets/Clipboard.png'


interface Task {
  id: number;
  content: string;
  checked: boolean;
}

interface ListTaskProps {
  listTasks: Task[];
  onDeleteTask: (id: number) => void;
  onChangeCheck: (id: number) => void;
}

export function ListTask(props: ListTaskProps) {
  const { listTasks, onDeleteTask, onChangeCheck } = props;

  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }
  function handleToggleCheck(id: number) {
    onChangeCheck(id)
  }

  if (listTasks.length === 0) {
    return (
      <div className={styles.empty}>
        <img src={Clipboard} />
        <footer>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.listTasks}>
      <form>
        <ul>
          {listTasks.map((task) => (
            <TaskItem
              key={task.id}
              content={task.content}
              checked={task.checked}
              onDeleteTask={() => handleDeleteTask(task.id)}
              onChangeCheck={() => handleToggleCheck(task.id)}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}
