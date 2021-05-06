
import { Dispatch } from "redux";
import { FetchJob } from "./action";
import {instance} from '../../api'

export const fetchJobsAsync = () => {
    return async (dispatch: Dispatch) => {
        const rs = await instance.get("/jobpost")
        const jobs : any[] = rs.data
        dispatch(FetchJob(jobs))
    };
}

