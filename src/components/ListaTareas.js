
import React, { useState } from 'react';
import ItemTarea from './ItemTarea';
import { Input } from 'reactstrap';

function ListaTareas() {

    const [tareas, setTareas] = useState([
        {
            id: 1,
            nombre: 'Aprender React',
            desc: 'Instalar NodeJS, npm y Visual Studio code',
            encargado: 'Juan'
        },
        {
            id: 2,
            nombre: 'Construir una aplicación',
            desc: 'Crear por medio de consola un proyecto de React',
            encargado: 'Luis'
        }
    ]);

    const [nuevoTexto, setNuevoTexto] = useState('');
    const [nuevadesc, setNuevadesc] = useState('');
    const [nuevoencargado, setNuevoencargado] = useState('');

    const borrarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    const agregarTarea = () => {
        if (nuevoTexto.trim() !== '') {
            setTareas([...tareas, { id: tareas.length + 1, nombre: nuevoTexto, desc: nuevadesc, encargado: nuevoencargado }]);
            setNuevoTexto('');
            setNuevadesc('');
            setNuevoencargado('');
        }
    };

    return (
        <header>

            <div className='encabezado'><h1>Gestión de tereas</h1><img className='image-task' src="../747094-removebg-preview.png"></img>
            </div>
            <div className='container'>
                <div className='container-div'>
                    <h4>LISTA DE TAREAS</h4>
                    <ul>
                        {
                            tareas.map(tarea => {
                                return (
                                    <div className='container-items'>
                                        <ItemTarea key={tarea.id} tarea={tarea} />
                                        <button onClick={() => borrarTarea(tarea.id)}>✖️</button>
                                    </div>
                                )
                            }
                            )
                        }
                    </ul>
                </div>


                <div className='container-textbox'>
                    <div>
                        <h4>Agrega una nueva tarea a la lista +</h4>

                        <label>Nombre de la tarea:</label>
                        <Input
                            id="textbox"
                            type="text"
                            value={nuevoTexto}
                            onChange={e => setNuevoTexto(e.target.value)}
                            placeholder="Redactar informe mensual"
                        />

                        <label>Descripción de la tarea:</label>
                        <Input
                            id="textbox"
                            type="text"
                            value={nuevadesc}
                            onChange={e => setNuevadesc(e.target.value)}
                            placeholder="Crear un documento con los datos del mes"
                        />

                        <label>Encargado de la tarea:</label>
                        <Input
                            id="textbox"
                            type="text"
                            value={nuevoencargado}
                            onChange={e => setNuevoencargado(e.target.value)}
                            placeholder="Juan Pérez"
                        />

                        <button onClick={agregarTarea}>Agregar Tarea</button>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default ListaTareas;
