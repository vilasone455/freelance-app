import { JobActionTypes , JobActionType} from "./type";

interface PostState{
    post : any[]
}

const initialState : PostState = {
  post : []
}

export default function reducer(state = initialState, action : JobActionTypes) {
  switch (action.type) {
    case JobActionType.FETCH_JOBS:
        return { ...state, post : action.payload }
    default:
      return state;
  }
}

