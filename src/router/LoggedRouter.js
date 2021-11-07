import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavBar } from '../components/NavBar';
import { AdminView } from '../views/AdminView';
import { Params } from '../views/Params';
import { Task } from '../views/Task';
import { Users } from '../views/Users';
import { UserView } from '../views/UserView';
export default class index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id_sucursal: 0,
            cargando: 0,
            isAdmin: false,
            isUser: false
        }
    }
    componentDidMount() {
        let admin = localStorage.getItem('admin');
        console.log("desde iniciooooo.....",admin);
        if (admin) {
            this.state.cargando = false;
            this.setState({ cargando: this.state.cargando });
            this.state.isAdmin = true;
            this.setState({ isAdmin: this.state.isAdmin });
        } else {
            this.state.cargando = false;
            this.setState({ cargando: this.state.cargando });
            this.state.isUser = true;
            this.setState({ isUser: this.state.isUser });
        }
    }


    render() {
        return (
            <>
               {
                   this.state.isAdmin && !this.state.cargando &&(
                       <>
                            <Switch>
                                <Route exact path="/inicio" component={AdminView} />
                                <Route exact path="/users" component={Users}/>
                                <Route exact path="/params" component={Params} />
                                <Redirect to={{ pathname: "/inicio"}} />
                            </Switch>
                       </>
                   )
               }
               {
                   this.state.isUser && !this.state.cargando &&(
                       <>
                            <Switch>
                                <Route exact path="/inicio" component={UserView} />
                                <Route exact path="/task" component={Task}/>
                                {/* <Route exact path="/params" component={Params} /> */}
                                <Redirect to={{ pathname: "/inicio"}} />
                            </Switch>
                       </>
                   )
               }
            </>
        )
    }
}