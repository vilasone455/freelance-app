import { ServiceActionType , ServiceActionTypes} from "./type";

export interface ServiceState{
    services : any[]
}

const initialState : ServiceState = {
  services : []
}

export default function reducer(state = initialState, action : ServiceActionTypes) {
  switch (action.type) {
    case ServiceActionType.FETCH_SERVICE:
        return { ...state, services : action.payload }
    default:
      return state;
  }
}

