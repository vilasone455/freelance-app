
export enum ServiceActionType {
    FETCH_SERVICE = "FETCH_SERVICE"
}

interface FetchServiceAction {
    type: typeof ServiceActionType.FETCH_SERVICE
    payload: any[]
}

export type ServiceActionTypes = FetchServiceAction 