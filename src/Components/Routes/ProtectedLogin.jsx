import {Outlet,Navigate} from 'react-router-dom'

const PortectedLogin = ({islogin}) => {

    if(islogin === null){
        return(
            <div></div>
        )
    }else if(islogin === true){
        return <Navigate to={"/"} />

    }else if(islogin === false){
        return(
            <Outlet />
        )
    }

}

export default PortectedLogin