import { all } from "redux-saga/effects";
import { watchSendEmail } from "./emailSaga";

export default function* rootSaga() {
  yield all([watchSendEmail()]);
}
