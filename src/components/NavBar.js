import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
export const NavBar = (props) => {
    const [idsucursal, setIdSucursal] = useState(0);

    useEffect(() => {
        let id = localStorage.getItem('id_sucursal');
        setIdSucursal(Number(id));
    })

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload(true);
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark " style={{backgroundColor:'#193441',display:'flex',justifyContent:'space-between'}}>

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    EQUANS
                </Link >
                <button onClick={handleLogOut} className="btn btn-danger" >
                    Cerrar Sesión
                </button>
            </nav>
        </>
    )
}
