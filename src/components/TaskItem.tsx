import { Trash } from 'phosphor-react'
import styles from './TaskItem.module.css'
import { FormEvent, useState } from 'react';



interface TaskItemProps {
    checked: boolean;
    content: string;
    onDeleteTask: () => void;
    onChangeCheck: () => void;
}

export function TaskItem(props: TaskItemProps) {
    const { checked, content } = props


    function handleDeleteComment(event: FormEvent) {
        event.preventDefault()
        props.onDeleteTask();
    }

    function handleToggleCheck() {
        props.onChangeCheck()
    }





    return (
        <div className={styles.taskItem}>
            <li>
                <label>
                    <input
                        type='checkbox'
                        value='ava'
                        checked={checked}
                        onChange={handleToggleCheck}
                    />
                    <span> {content} </span>
                </label>
                <button onClick={handleDeleteComment} title='Deletar task'>
                    <Trash className={styles.Trash} size={20} />
                </button>
            </li>
        </div>
    )
}