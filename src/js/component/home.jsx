import React, { useState, useEffect } from "react";


//Import my CSS files
import ToDoList from "../../styles/ToDoList.css"

//create your first component

const Home = () => {
	/*const arrTemp = ["Read", "WorkOut", "Surf"]*/
	const [arrTemp, setarrTemp] = useState([{
		tarea:"Read", done:false},
		{tarea:"Workout",done:false}])
	const eliminarTarea = (indice) => {
		setarrTemp(
			arrTemp.filter((item, index) => {
				return index != indice
			})

		)
	}
	useEffect (()=>{console.log("Se renderizo")},[arrTemp])
	return (
		<div className="text-center mt-5">
			<input placeholder="Add a new task"
				onKeyDown={(e) => {
					if (e.keyCode == "13") {
						console.log("Enter")
						setarrTemp([...arrTemp, {tarea: e.target.value, done:false}])
					}
				}}>
			</input>
			<div className="row">
				<h2 className="text-success">ToDos List :</h2>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-3">
						{arrTemp && arrTemp.length > 0 ?

							<>{arrTemp.map((item, index) => {

								return <li key={index} className=" d-flex justify-content-between">
									{item.tarea} - {item.done? "Completed" : "Pending"}
									<button onClick={() => {
										eliminarTarea(index)
									}} className="ocultar btn m-1" type="button"> <i class="fa-solid fa-x fa-xs  "></i>
									</button>

								</li>
							})}</>
							:
							<><h4>There are not Tasks to Do</h4></>}
					</div>


				</div>

			</div>
		</div>
	);
};

export default Home;
