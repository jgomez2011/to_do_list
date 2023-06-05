import React, { useState } from "react";
import ListaDeTareas from "./ListaDeTareas.jsx";
import Form from "./Form.jsx";

const ToDo = () => {
	const [error, setError] = useState(false);
	const [listTask, setListTask] = useState([]);
	const [task, setTask] = useState({
		tarea: "",
	});

	const nuevaTarea = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value,
		});
	};

	/* funcion para agregar todas las tareas guardadas a un array */
	const addTask = () => {
		if (task.tarea.trim() != "") {
			setListTask([...listTask, task]);
			setTask({tarea:""})
			setError(false);
		} else {
			setError(true);
		}
	};

	/* funcion para borrar tareas */
	const deleteTask = (id) => {
		let newListTask = listTask.filter((item, index) => index != id);
		setListTask(newListTask);
	};

	return (
		<>
            <div className="contenedor">
				<div className="card toDo col-6">
					<h3 className="titulo text-center py-3">Lista de Tareas</h3>

					{/* input para agregar tareas nuevas */}

					<Form
						nuevaTarea={nuevaTarea}
						addTask={addTask}
						task={task}
					/>

					<div className="lista">
						{/* si la tarea esta en blanco, lanzar un div de aviso */}
						{error && (
							<div className="alert alert-danger">
								Por favor especifique  la Tarea
							</div>
						)}

						<h1>Tareas Pendiente</h1>
						<hr />

						{/* Este parrafo deberia salir cuando no hay tareas */}
						{listTask == "" && <p>No hay Tareas Pendientes</p>}

						{/* lista de tareas nuevas */}

						<ListaDeTareas
							deleteTask={deleteTask}
							listTask={listTask}
						/>

						<p className="fs-6 p-0 mb-2">
							{listTask.length} Tareas Pendientes
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ToDo;