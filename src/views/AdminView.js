import React, { useEffect, useState } from 'react'
import apiDB from '../api/Api';
import { useHistory } from "react-router-dom";
import { NavBar } from '../components/NavBar';
export const AdminView = () => {
    const history=useHistory();
    const [params, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [task, setTask] = useState([]);
    useEffect(() => {
        traerData();
    }, [])

    const traerData=async()=>{
        const data=await apiDB.get('params');
        setData(data.data.params);
        const datas=await apiDB.get('users');
        setUsers(datas.data.users);
        const tasks=await apiDB.get('tasks/all');
        setTask(tasks.data.task);
    }

    const handleDelete=async(value,id)=>{
        if(value===1){
            const datas=await apiDB.delete(`params/delete/${id}`);
            if(datas.data.mensaje){
                window.alert(`${datas.data.mensaje}`);
            }
        }else{
            const datas=await apiDB.delete(`user/delete/${id}`);
            if(datas.data.mensaje){
                window.alert(`${datas.data.mensaje}`);
            }
        }
    }

    const handleRed=(value,id)=>{
        if(value===1){
            history.push('/params',{id});
        }else{
            history.push('/users',{id});
        }
    }

    const handleRed2=(value)=>{
        if(value===1){
            history.push('/params');
        }else{
            history.push('/users');
        }
    }

    return (
        <div style={{height:window.innerHeight,flex:1}} >
            <NavBar/>
            <div>
                <div style={{marginTop:10,padding:5}} >
                    <h1 style={{textAlign:'center',color:'#193441'}} >Params</h1>
                </div>
                {
                    params.length>0 ?
                    (
                        <table class="table table-striped table-bordered" style={{marginTop:10}} >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre Parametro</th>
                                    <th>Parametro 1</th>
                                    <th>Parametro 2</th>
                                    <th>Parametro 3</th>
                                    <th>Parametro 4</th>
                                    <th>Parametro 5</th>
                                    <th>Parametro 6</th>
                                    <th>Parametro 7</th>
                                    <th>Parametro 8</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    params.map((data,key)=>
                                    (
                                        <tr key={key} >
                                            <td>{data.id}</td>
                                            <td>{data.nombre_parametro}</td>
                                            <td>{data.parametro1}</td>
                                            <td>{data.parametro2}</td>
                                            <td>{data.parametro3}</td>
                                            <td>{data.parametro4}</td>
                                            <td>{data.parametro5}</td>
                                            <td>{data.parametro6}</td>
                                            <td>{data.parametro7}</td>
                                            <td>{data.parametro8}</td>
                                            <td><button onClick={()=>handleRed(1,data.id)} className="btn btn-primary" >Editar</button></td>
                                            <td><button onClick={()=>handleDelete(1,data.id)} className="btn btn-danger" >Eliminar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ):
                    (
                        <h3 style={{textAlign:'center'}} >No hay params creados</h3>
                    )
                }
            </div>
            <div>
                <div style={{padding:5,marginTop:20}} >
                    <h1 style={{textAlign:'center',color:'#193441'}} >Usuarios</h1>
                </div>
                {
                    users.length>0 ?
                    (
                        <table class="table table-striped table-bordered" style={{marginTop:10}} >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre Usuario</th>
                                    <th>Username</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((datas,key)=>
                                    (
                                        <tr key={key} >
                                            <td>{datas.id}</td>
                                            <td>{datas.nombre}</td>
                                            <td>{datas.username}</td>
                                            <td><button onClick={()=>handleRed(2,datas.id)} className="btn btn-primary" >Editar</button></td>
                                            <td><button onClick={()=>handleDelete(2,datas.id)} className="btn btn-danger" >Eliminar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ):
                    (
                        <h3 style={{textAlign:'center'}} >No hay usuarios creados</h3>
                    )
                }
            </div>

            <div>
                <div style={{padding:5,marginTop:20}} >
                    <h1 style={{textAlign:'center',color:'#193441'}} >Tareas</h1>
                </div>
                {
                    task.length>0 ?
                    (
                        <table class="table table-striped table-bordered" style={{marginTop:10}} >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre Tarea</th>
                                    <th>Usuario</th>
                                    <th>Horas Presupuestadas</th>
                                    <th>Horas Realizadas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    task.map((datas,key)=>
                                    (
                                        <tr key={key} >
                                            {
                                                users.map((usuarios,key)=>{
                                                    if(datas.id_usuario===usuarios.id){
                                                        return (
                                                            <>
                                                                <td>{datas.id}</td>
                                                                <td>{datas.nombre}</td>
                                                                <td>{usuarios.nombre}</td>
                                                                <td>{datas.horasp}</td>
                                                                <td>{datas.horasr}</td>  
                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ):
                    (
                        <h3 style={{textAlign:'center'}} >No hay tareas creadas</h3>
                    )
                }
            </div>

            <button
                style={{position:'fixed',height:80,width:80,borderRadius:40,bottom:20,right:30,backgroundColor:'#193441',border:'none',outline:'none',cursor:'pointer',color:'white'}}
                onClick={()=>handleRed2(2)}
            >
                Crear Usuarios
            </button>
            <button
                style={{position:'fixed',height:80,width:80,borderRadius:40,bottom:20,left:30,backgroundColor:'#193441',border:'none',outline:'none',cursor:'pointer',color:'white'}}
                onClick={()=>handleRed2(1)}
            >
                Crear Params
            </button>
            
        </div>
    )
}
