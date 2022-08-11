//Create the HOC for protected Routes
const ReqAuth = ({children}) => {

    const auth= useSelector((store)=>store.AuthReducer.isAuth)
    if(!auth){
        //login page
        return <Navigate to='/login' state={{from:location}}
    }
};

export default ReqAuth;
