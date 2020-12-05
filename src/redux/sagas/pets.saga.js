import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// The data returned by this function is an array of tuples in the following format:
// ("id", "name", "breed", "color", "is_checked_in", "owner_id")
// will add factory function later

function zipPets (data) {
  let tempArr = [];
  for (let row of data ) {
    console.log('in zipPets, row=', row)
    let tempObj = {
      id: row[0],
      name: row[1],
      breed: row[2],
      color: row[3],
      is_checked_in: row[4],
      owner_id: row[5],
    };
    tempArr.push(tempObj);
  }
  return tempArr;
}

function* fetchPets() {
  try {
    console.log('in fetchPets before the yield')
    const response = yield axios.get(`/api/pets`);
    console.log('in fetchPets checking response:', response)
    yield put({ type: "SET_PETS", payload: zipPets(response.data) });
  } catch (error) {
    console.log("Pet get from DB failed", error)
  }
}


function* petsSaga() {
  console.log('in the petsSaga watcher')
  yield takeLatest("FETCH_PETS", fetchPets);
}


export default petsSaga;