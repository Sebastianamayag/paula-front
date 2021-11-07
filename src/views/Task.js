import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import apiDB from '../api/Api';

export const Task = (props) => {
    console.log(props)
    const history=useHistory();
    const [nombre, setNombre] = useState('');
    const [grupo, setGrupo] = useState('');
    const [horasr, setHorasr] = useState(0);
    const [horasp, setHorasp] = useState(0);
    const [estados, setEstados] = useState('');
    const [sprint, setSprint] = useState(0);
    const [actividadnp, setActividadnp] = useState('');

    useEffect(() => {
        traerData()
    }, [])

    const traerData=async()=>{
        if(props.location.state.idtask){
            console.log(props.location.state.idtask)
            const task=await apiDB.get(`/task/one/${props.location.state.idtask}`);
            setHorasp(task.data.task.horasp);
            setHorasr(task.data.task.horasr);
            setActividadnp(task.data.task.actividadnp);
            setEstados(task.data.task.estados);
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(props.location.state.idtask){
            const datas=await apiDB.put(`edit/task/${props.location.state.idtask}`,{horasr,horasp,estados,actividadnp});
            if(datas.data.mensaje){
                history.push('inicio');
            }
        }else{
            if(nombre!=='' && grupo !=='' && horasr!==0 && horasp !==0 && estados!=='' && sprint !==0 ){
                console.log("id",props.location.state.id)
                const datas= await apiDB.post('/create/task',{nombre,grupo,horasr,horasp,estados,actividadnp,sprint,id_usuario:props.location.state.id});
                if(datas.data.success){
                    history.push('inicio');
                }
            }
        }
    }
    return (
        <div style={{height:window.innerHeight,justifyContent:'center',alignItems:'center',display:'flex',flex:1}} >
            <div className="shadow" style={{display:'flex',flexDirection:'column',width:'35%',padding:20,borderColor:'gray',borderWidth:0.5,borderRadius:12}} >
                <img style={{alignSelf:'center',width:'70%'}} src="https://res.cloudinary.com/dczyyaphf/image/upload/v1634336847/WhatsApp_Image_2021-10-11_at_7.54.12_AM_loubsv.jpg" />
                <h2 style={{textAlign:'center',marginTop:-10}} >Crear Tareas</h2>
                <div>
                    <form>
                            {props.location.state.idtask?
                            (
                                <>
                                    <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{width:'25%'}} >
                                            <p style={{color:'#193441',textAlign:'left'}} >Horas Programadas:</p>
                                        </div>
                                        <input
                                            style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                            type="number"
                                            placeholder="Horas Programadas"
                                            onChange={(e)=>setHorasp(e.target.value)}
                                            value={horasp}
                                        />
                                    </div>
                                    <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{width:'25%'}} >
                                            <p style={{color:'#193441',textAlign:'left'}} >Horas Realizadas:</p>
                                        </div>
                                        <input
                                            style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                            type="number"
                                            placeholder="Horas Realizadas"
                                            onChange={(e)=>setHorasr(e.target.value)}
                                            value={horasr}
                                        />
                                    </div>
                                    <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{width:'25%'}} >
                                            <p style={{color:'#193441',textAlign:'left'}} >Estados</p>
                                        </div>
                                        <input
                                            style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                            type="text"
                                            placeholder="Estado de la tarea"
                                            onChange={(e)=>setEstados(e.target.value)}
                                            value={estados}
                                        />
                                    </div>
                                    <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{width:'25%'}} >
                                            <p style={{color:'#193441',textAlign:'left'}} >Actividad no programada</p>
                                        </div>
                                        <input
                                            style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                            type="text"
                                            placeholder="Nombre de la actividad"
                                            onChange={(e)=>setActividadnp(e.target.value)}
                                            value={actividadnp}
                                        />
                                    </div>
                                </>
                            ):
                            (
                                <>
                                <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{width:'25%'}} >
                                        <p style={{color:'#193441',textAlign:'left'}} >Nombre:</p>
                                    </div>
                                    <input
                                        style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                        type="text"
                                        placeholder="Nombre de la Tarea"
                                        onChange={(e)=>setNombre(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{width:'25%'}} >
                                        <p style={{color:'#193441',textAlign:'left'}} >Grupo:</p>
                                    </div>
                                    <input
                                        style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                        type="text"
                                        placeholder="Grupo"
                                        onChange={(e)=>setGrupo(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{width:'25%'}} >
                                        <p style={{color:'#193441',textAlign:'left'}} >Horas Programadas:</p>
                                    </div>
                                    <input
                                        style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                        type="number"
                                        placeholder="Horas Programadas"
                                        onChange={(e)=>setHorasp(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{width:'25%'}} >
                                        <p style={{color:'#193441',textAlign:'left'}} >Horas Realizadas:</p>
                                    </div>
                                    <input
                                        style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                        type="number"
                                        placeholder="Horas Realizadas"
                                        onChange={(e)=>setHorasr(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{width:'25%'}} >
                                        <p style={{color:'#193441',textAlign:'left'}} >Estados</p>
                                    </div>
                                    <input
                                        style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                        type="text"
                                        placeholder="Estado de la tarea"
                                        onChange={(e)=>setEstados(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{width:'25%'}} >
                                        <p style={{color:'#193441',textAlign:'left'}} >Actividad no programada</p>
                                    </div>
                                    <input
                                        style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                        type="text"
                                        placeholder="Nombre de la actividad"
                                        onChange={(e)=>setActividadnp(e.target.value)}
                                    />
                                </div>
                                <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{width:'25%'}} >
                                        <p style={{color:'#193441',textAlign:'left'}} >Sprint</p>
                                    </div>
                                    <input
                                        style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                        type="number"
                                        placeholder="Número de sprint"
                                        onChange={(e)=>setSprint(e.target.value)}
                                    />
                                </div>
                                </>
                            )
                            }
                        <div style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                            <button style={{backgroundColor:'#193441',alignSelf:'center',border:'none',outline:'none',cursor:'pointer',padding:10,color:'white',borderRadius:7,width:'70%',marginLeft:'15%'}} 
                                onClick={handleSubmit}
                            >{props.location.state.idtask?'Editar Tareas':'Crear Tareas'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
