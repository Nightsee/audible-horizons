import { redirect, useNavigate } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate()
    return( navigate('/home') )
}

export default Redirect;