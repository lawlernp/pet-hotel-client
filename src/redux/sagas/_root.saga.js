import { all } from "redux-saga/effects";
import petsSaga from "./pets.saga.js";
import deletePetsSaga from "./delete.pets.saga"

export default function* rootSaga() {
  console.log('in root saga')
  yield all([
      petsSaga(), deletePetsSaga()
  ]);
}
