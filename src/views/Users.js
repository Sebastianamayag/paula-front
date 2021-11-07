import React, { useEffect, useState } from 'react'
import apiDB from '../api/Api';
import { useHistory } from "react-router-dom";
export const Users = (props) => {
    const history=useHistory();
    useEffect(() => {
        traerData();
    }, []);
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');

    const traerData=async()=>{
        if(props.location.state){
            const datas=await apiDB.get(`users/${props.location.state.id}`);
            setName(datas.data.users.nombre);
            setUserName(datas.data.users.username);
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(props.location.state){
            const datas=await apiDB.put(`change/user/${props.location.state.id}`,{username,nombre:name});
            if(datas.data.mensaje){
                history.push('inicio');
            }
        }else{
            if(username!=='' && name !==''){
                let usuario="usuario";
                const datas=await apiDB.post('create',{username,nombre:name,tipo:usuario});
                if(datas.data.mensaje){
                    history.push('inicio');
                }
            }
        }
    }

    return (
        <div style={{height:window.innerHeight,justifyContent:'center',alignItems:'center',display:'flex',flex:1}} >
            <div className="shadow" style={{display:'flex',flexDirection:'column',width:'25%',padding:20,borderColor:'gray',borderWidth:0.5,borderRadius:12}} >
                <img style={{alignSelf:'center',width:'70%'}} src="https://res.cloudinary.com/dczyyaphf/image/upload/v1634336847/WhatsApp_Image_2021-10-11_at_7.54.12_AM_loubsv.jpg" />
                <h2 style={{textAlign:'center',marginTop:-10}} >Crear usuarios</h2>
                <div>
                    <form>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >nombre:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Nombre de usuario"
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Username:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="UserName del usuario"
                                onChange={(e)=>setUserName(e.target.value)}
                                value={username}
                            />
                        </div>
                        <div style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                            <button style={{backgroundColor:'#193441',alignSelf:'center',border:'none',outline:'none',cursor:'pointer',padding:10,color:'white',borderRadius:7,width:'70%',marginLeft:'15%'}} 
                                onClick={handleSubmit}
                            >{props.location.state?'Editar Usuario':'Crear Usuario'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
