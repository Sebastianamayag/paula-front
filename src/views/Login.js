import React, { useState } from 'react'
import '../css/global.css';
import { useHistory } from "react-router-dom";
import apiDB from '../api/Api';
export const Login = (props) => {
    console.log(props);
    const history=useHistory();
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(password==='123456'){
            history.push('/auth/change/password',{user});
        }else{
            const data=await apiDB.post('login',{username:user,password});
            if(data.data.tipo=="admin"){
                localStorage.setItem('admin', "si");
            }
            localStorage.setItem('session', "iniciada");
            localStorage.setItem('id', `${data.data.id}`);
            window.location.reload(true);
        }
    }

    return (
        <div style={{height:window.innerHeight,justifyContent:'center',alignItems:'center',display:'flex',flex:1}} >
            <div className="shadow" style={{display:'flex',flexDirection:'column',width:'20%',padding:20,borderColor:'gray',borderWidth:0.5,borderRadius:12}} >
                <img style={{alignSelf:'center',width:'70%'}} src="https://res.cloudinary.com/dczyyaphf/image/upload/v1634336847/WhatsApp_Image_2021-10-11_at_7.54.12_AM_loubsv.jpg" />
                <div>
                    <form>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Usuario:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="text"
                                placeholder="Usuario"
                                onChange={(e)=>setUser(e.target.value)}
                            />
                        </div>
                        <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                            <p style={{color:'#193441'}} >Password:</p>
                            <input
                                style={{outline:'none',width:'65%',borderTop:'none',borderRight:'none',borderLeft:'none'}}
                                type="password"
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                            <button style={{backgroundColor:'#193441',alignSelf:'center',border:'none',outline:'none',cursor:'pointer',padding:10,color:'white',borderRadius:7,width:'70%',marginLeft:'15%'}} 
                                onClick={handleSubmit}
                            >Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


