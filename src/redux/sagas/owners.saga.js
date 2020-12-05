import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// function* fetchOwners() {
//   try {
//     const response = yield axios.get(`/api/pets`);
//     yield put({ type: "SET_OWNERS", payload: response.data });
//   } catch (error) {
//     console.log("Owner get from DB failed", error);
//   }
// }

function* pushOwners(action) {
    console.log('in pushOwners saga', action);
    try {
     yield axios.post('/api/owners', action.payload);
    } catch (error) {
    console.log("owner post failed", error);
  }
}

function* ownersSaga() {
//   yield takeLatest("FETCH_OWNERS", fetchOwners);
  yield takeLatest("PUSH_OWNERS", pushOwners);
}


export default ownersSaga;