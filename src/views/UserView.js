import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import apiDB from '../api/Api';
import { NavBar } from '../components/NavBar';

export const UserView = () => {
    const history=useHistory();
    const [task, setTask] = useState([]);
    const [id, setId] = useState(0);
    const [usuarioBD, setUsuarioBD] = useState({});
    const [sprints, setSprints] = useState([]);
    useEffect(() => {
        traerTask();
    }, [])

    const traerTask=async()=>{
        let idlocal=await localStorage.getItem('id');
        setId(parseInt(idlocal,10));
        const tareas=await apiDB.get(`task/all/${idlocal}`);
        const usuario=await apiDB.get(`/users/${idlocal}`);
        const usuarioparams=await apiDB.get(`find/params/persona/${usuario.data.users.nombre}`);
        setUsuarioBD(usuarioparams.data.params);
        console.log(usuarioparams);
        const sprint=await apiDB.get(`find/sprint`);
        setSprints(sprint.data.params);
        setTask(tareas.data.task)
    }

    const handleDelete=async(id)=>{
        const datas=await apiDB.delete(`task/delete/${id}`);
        if(datas.data.mensaje){
            window.alert(`${datas.data.mensaje}`);
        }
    }


    return (
        <div style={{height:window.innerHeight,flex:1}}>
            <NavBar/>
            <div>
                <div style={{backgroundColor:'#193441',padding:5,marginTop:20}} >
                    <h1 style={{textAlign:'center',color:'white'}} >Tareas</h1>
                </div>

            </div>
            {
                task.length>0 ?
                (
                    <table className="table table-striped table-bordered" style={{marginTop:10}} >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Grupo</th>
                                    <th>Nombre Tarea</th>
                                    <th>Programador</th>
                                    <th>Celula</th>
                                    <th>Horas Programadas</th>
                                    <th>Horas Realizadas</th>
                                    <th>Estados</th>
                                    <th>Actividad no programada</th>
                                    <th>TD_ID_PERSONA</th>
                                    <th>Sprint</th>
                                    <th>¿Programador?</th>
                                    <th>Rol</th>
                                    <th>Días de sprint</th>
                                    <th>Fecha Inicio</th>
                                    <th>Fecha Fin</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                        <tbody>
                            {
                                task.map((datas,key)=>
                                {
                                    console.log(datas)
                                    return(
                                    <tr key={key} >
                                            {sprints.map((dat,k)=>{
                                                if(datas.sprint==dat.parametro1){
                                                    console.log(dat)
                                                    return(
                                                        <>
                                                            <td>{datas.id}</td>
                                                            <td>{datas.grupo}</td>
                                                            <td>{datas.nombre}</td>
                                                            <td>{usuarioBD.parametro1}</td>
                                                            <td>{usuarioBD.parametro7}</td>
                                                            <td>{datas.horasp}</td>
                                                            <td>{datas.horasr}</td>
                                                            <td>{datas.estados}</td>
                                                            <td>{datas.actividadnp}</td>
                                                            <td>{usuarioBD.parametro3}</td>
                                                            <td>{dat.parametro1}</td>
                                                            <td>{usuarioBD.parametro5}</td>
                                                            <td>{usuarioBD.parametro7}</td>
                                                            <td>{dat.parametro4}</td>
                                                            <td>{dat.parametro2}</td>
                                                            <td>{dat.parametro3}</td>
                                                            <td><button onClick={()=>history.push('/task',{id,idtask:datas.id})}  className="btn btn-primary" >Editar</button></td>
                                                            <td><button onClick={()=>handleDelete(datas.id)} className="btn btn-danger" >Eliminar</button></td>
                                                        </>
                                                    )
                                                }
                                                })}
                                    </tr>
                                )})
                            }
                        </tbody>
                    </table>
                ):
                (
                    <h3 style={{textAlign:'center'}} >No hay tareas creadas</h3>
                )
            }
            <button
                style={{position:'fixed',height:80,width:80,borderRadius:40,bottom:20,right:30,backgroundColor:'#193441',border:'none',outline:'none',cursor:'pointer',color:'white'}}
                onClick={()=>history.push('/task',{id})}
            >
                Crear Tareas
            </button>
        </div>
    )
}
