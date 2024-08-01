import { combineEpics, Epic } from "redux-observable";
import { fetchImagesEpic } from "../screens/ScreenHome/redux/epics";
 const epic:Epic[]=[
    fetchImagesEpic
 ] as Epic[]

export const rootEpic=combineEpics(...epic);