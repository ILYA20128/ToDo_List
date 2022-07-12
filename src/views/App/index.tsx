import React from 'react';

import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';


import styles from './index.module.scss';

export const App: React.FC = () => {
	const [
		tasks,
		createTask,
		updateTask,
		removeTask,
	] = useToDoStore(state => [
		state.tasks,
		state.createTask,
		state.updateTask,
		state.removeTask,
	]); 


	return (
		<article className={styles.article}>
			<h1 className={styles.article__Title}>Менеджер задач (Симончик И.А.)</h1>
			<section className={styles.article__Section}>
					<InputPlus 
							onAdd={(title) => {
								if (title) {
									createTask(title)
								}
							}}
					/>
			</section>
			<section className={styles.article__Section}>
							{!tasks.length && (
								<p className={styles.article__Text}>Нет ни одной задачи.</p>
							)}
							{tasks.map((task) => (
								<InputTask
									key={task.id}
									id={task.id}
									title={task.title}
									onDone={removeTask}
									onEdited={updateTask}
									onRemoved={removeTask}
								/>
							))}
			</section>
		</article>
	); 
}