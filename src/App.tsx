import { Header } from './components/Header'
import { TasksContainer } from './components/TasksContainer'
import styles from './App.module.css'
import './global.css'

export default function App() {
  return (
    <div>
      <Header />
      <div className='styles.wrapper'>
        <TasksContainer
        />
      </div>
    </div>
  )
}