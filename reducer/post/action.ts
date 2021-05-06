import { JobActionTypes, JobActionType } from "./type";


export function FetchJob(data : any[]): JobActionTypes {
  return {
    type: JobActionType.FETCH_JOBS,
    payload: data
  }
}