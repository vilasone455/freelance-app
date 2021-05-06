import axios from "axios";
import { Dispatch } from "redux";
import { instance } from "../../api";
import { FetchService } from "./action";

export const fetchServiceAsync = () => {
    return async (dispatch: Dispatch) => {
        const rs = await instance.get("/service")
        const services : any[] = rs.data
        dispatch(FetchService(services))
    };
}

