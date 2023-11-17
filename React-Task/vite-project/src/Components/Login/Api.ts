

import { NavigateFunction } from "react-router-dom";
import { setLocalItem } from "../../utilis/localstorage";
import { postApi } from "../../services/service";
import { ENDPOINTURL } from "../../services/Endpoint";

export const Loginrequest = async (
  data: {email?:string, password?:string },
  navigate: NavigateFunction | any,
  reset:any,
  setSnakeBarToast:React.Dispatch<React.SetStateAction<boolean>>,
  successCallback?: any
) => {
  const response: any = await postApi(ENDPOINTURL.LOGIN, data);
  console.log(response, 'response')
  if (response.status === 200) {
    setSnakeBarToast && setSnakeBarToast(true)
    reset()
    setLocalItem("user", response.data.user);
    setLocalItem("token", response.data.token);
    successCallback && successCallback();
    navigate('') 
  } else {
    setSnakeBarToast(false)
  }
};
