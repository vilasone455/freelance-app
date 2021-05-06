import { ServiceActionTypes, ServiceActionType } from "./type";

export function FetchService(data : any[]): ServiceActionTypes {
  return {
    type: ServiceActionType.FETCH_SERVICE,
    payload: data
  }
}