import { call, put, delay, takeLatest } from "redux-saga/effects";
import emailjs from "emailjs-com";
import moment from "moment";

import { serviceID, userID, templateID } from "../../keys/keys";

import {
  resetEmailStatus,
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailFailure,
} from "../../slices/emailSlice";

import { sendEmailRequestType } from "../../slices/emailSlice";

function* sendEmail(action: sendEmailRequestType) {
  try {
    const { userData } = action.payload;
    const timestamp = moment().format("DD/MM/YYYY HH:mm");

    const templateParams = {
      to_email: userData.email,
      user_data: JSON.stringify(userData),
      timestamp,
    };

    yield call(emailjs.send, serviceID, templateID, templateParams, userID);
    yield put(sendEmailSuccess());
    yield delay(5000);
    yield put(resetEmailStatus());
  } catch (error) {
    const errorMessage =
      (error instanceof Error && error.message) || "Неизвестная ошибка";
    yield put(sendEmailFailure({ error: { message: errorMessage } }));
  }
}

export function* watchSendEmail() {
  yield takeLatest(sendEmailRequest.type, sendEmail);
}
