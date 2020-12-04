import { all } from "redux-saga/effects";
import petsSaga from "./pets.saga.js";

export default function* rootSaga() {
  console.log('in root saga')
  yield all([
      petsSaga(),
  ]);
}
