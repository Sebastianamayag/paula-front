import React, { useEffect, useState } from 'react'
import apiDB from '../api/Api';
import { useHistory } from "react-router-dom";
export const Params = (props) => {
    const history=useHistory();
    useEffect(() => {
        traerData();
    }, []);
    const [name, setName] = useState('');
    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');
    const [param3, setParam3] = useState('');
    const [param4, setParam4] = useState('');
    const [param5, setParam5] = useState('');
    const [param6, setParam6] = useState('');
    const [param7, setParam7] = useState('');
    const [param8, setParam8] = useState('');
    const traerData=async()=>{
        if(props.location.state){
            const datas=await apiDB.get(`params/${props.location.state.id}`);
            setName(datas.data.params.nombre_parametro);
            setParam1(datas.data.params.parametro1);
            setParam2(datas.data.params.parametro2);
            setParam3(datas.data.params.parametro3);
            setParam4(datas.data.params.parametro4);
            setParam5(datas.data.params.parametro5);
            setParam6(datas.data.params.parametro6);
            setParam7(datas.data.params.parametro7);
            setParam8(datas.data.params.parametro8);
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(props.location.state){
            const datas=await apiDB.put(`change/params/${props.location.state.id}`,{nombre_parametro:name,parametro1:param1,parametro2:param2,parametro3:param3,parametro4:param4,parametro5:param5,parametro6:param6,parametro7:param7,parametro8:param8});
            if(datas.data.mensaje){
                history.push('inicio');
            }
        }else{
            if(name !=='' && param1!=='' ){
                const datas=await apiDB.post('create/params',{nombre_parametro:name,parametro1:param1,parametro2:param2,parametro3:param3,parametro4:param4,parametro5:param5,parametro6:param6,parametro7:param7,parametro8:param8});
                if(datas.data.success){
                    history.push('inicio');
                }
            }
        }
    }

    return (
        <div style={{height:window.innerHeight,justifyContent:'center',alignItems:'center',display:'flex',flex:1}} >
            <div className="shadow" style={{display:'flex',flexDirection:'column',width:'25%',padding:20,borderColor:'gray',borderWidth:0.5,borderRadius:12}} >
                <img style={{alignSelf:'center',width:'70%'}} src="https://res.cloudinary.com/dczyyaphf/image/upload/v1634336847/WhatsApp_Image_2021-10-11_at_7.54.12_AM_loubsv.jpg" />
                <h2 style={{textAlign:'center',marginTop:-10}} >Crear Params</h2>
                <div>
                    <form>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >nombre:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Nombre de param"
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 1:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 1"
                                onChange={(e)=>setParam1(e.target.value)}
                                value={param1}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 2:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 2"
                                onChange={(e)=>setParam2(e.target.value)}
                                value={param2}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 3:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 3"
                                onChange={(e)=>setParam3(e.target.value)}
                                value={param3}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 4:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 4"
                                onChange={(e)=>setParam4(e.target.value)}
                                value={param4}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 5:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 5"
                                onChange={(e)=>setParam5(e.target.value)}
                                value={param5}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 6:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 6"
                                onChange={(e)=>setParam6(e.target.value)}
                                value={param6}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 7:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 7"
                                onChange={(e)=>setParam7(e.target.value)}
                                value={param7}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Param 8:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Param 8"
                                onChange={(e)=>setParam8(e.target.value)}
                                value={param8}
                            />
                        </div>
                        <div style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                            <button style={{backgroundColor:'#193441',alignSelf:'center',border:'none',outline:'none',cursor:'pointer',padding:10,color:'white',borderRadius:7,width:'70%',marginLeft:'15%'}} 
                                onClick={handleSubmit}
                            >{props.location.state?'Editar Param':'Crear Param'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

