import { Dispatch } from "react";
import { setLocalItem } from "../../utilis/localstorage";
import { postApi } from "../../services/service";
import { ENDPOINTURL } from "../../services/Endpoint";


export const Signuprequest = async (
    payload: {
        name: string
        email: string
        password: string
        role: string
        mobile: string
        dob: string
        sportID: number
        machineId: string
        yearsOfExp: number
    },
    setSnakeBarToast:React.Dispatch<React.SetStateAction<boolean>>,
    setUser: React.Dispatch<React.SetStateAction<string>>,
    reset?:any,
    successCallBack?: any
  ) => {
    const response: any = await postApi(ENDPOINTURL.SIGNUP, payload);
   console.log(response, 'response')
    if (response.status === 200) {
     setSnakeBarToast(true)
     reset()
      console.log(response, "sign upp");
      setLocalItem("userid", response);
      setUser(response.data);
     successCallBack&& successCallBack
    } else {
        setSnakeBarToast(true)
    }
  };
