import {Outlet,Navigate} from 'react-router-dom'

const PortectedRoutes = ({islogin}) => {

    if(islogin === null){
        return(
            <div></div>
        )
    }else if(islogin === true){
        return(
            <Outlet />
        )
    }else if(islogin === false){
        return <Navigate to={"/login"} />
    }

}

export default PortectedRoutes