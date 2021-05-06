
export enum JobActionType {
    FETCH_JOBS = "FETCH_JOBS"
}

interface FetchJobAction {
    type: typeof JobActionType.FETCH_JOBS
    payload: any[]
}

export type JobActionTypes = FetchJobAction