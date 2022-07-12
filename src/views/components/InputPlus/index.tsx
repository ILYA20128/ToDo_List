import React, { useState, useCallback } from 'react';

import styles from './index.module.scss';

interface InputPlusProps {
	onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({
	onAdd,
}) => {
	const [InputValue, setInputValue] = useState('');
	const addTask = useCallback(() => {
		onAdd(InputValue);
		setInputValue('');
	},[InputValue]);

	return (
		<div className={styles.InputPlus}>
			<input 
				type="text"
				className={styles.InputPlusValue}
				value={InputValue}
				onChange={(evt) => {
					setInputValue(evt.target.value);
				}}
				onKeyDown={(evt) => {
					if (evt.key === 'Enter') {
						addTask();
					}
				}}
				placeholder="Введите текст..."
			/>

			<button 
			onClick={addTask}
			aria-label="Add"
			className={styles.InputPlusButton}
			/>
		</div>
	)
};