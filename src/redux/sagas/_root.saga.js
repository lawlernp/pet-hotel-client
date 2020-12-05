import { all } from "redux-saga/effects";
import petsSaga from "./pets.saga";
import ownersSaga from "./owners.saga";

export default function* rootSaga() {
  yield all([
      petsSaga(),
      ownersSaga(),
  ]);
}
