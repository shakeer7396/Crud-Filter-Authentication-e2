// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from './actionTypes';

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {
  const {type,payload} = action;
  switch(type){
    case types.LOGIN_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,
      }
      case types.LOGIN_SUCCESS:
      return{
        ...state,
        token:payload,
        isAuth:true,
        isLoading:true,
        isError:false,
      }
      case types.LOGIN_FAILURE:
      return{
        ...state,
        isLoading:true,
        isError:false,
        isAuth:false,
        token:'',
      }
      default:
  return state;
  }
  
};

export { reducer };
