import { call, put, delay, takeLatest } from "redux-saga/effects";
import { resetEmailStatus } from "../../slices/emailSlice";
import emailjs from "emailjs-com";

import {
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailFailure,
} from "../../slices/emailSlice";

import { sendEmailRequestType } from "../../slices/emailSlice";

import moment from "moment";

function* sendEmail(action: sendEmailRequestType) {
  try {
    const { userData } = action.payload;
    const timestamp = moment().format("DD/MM/YYYY HH:mm");

    const serviceID = "service_k25bmr9";
    const templateID = "template_02y4hye";
    const userID = "vFtSy7qZN4WD1_TsM";

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
    yield put(sendEmailFailure(error.message));
  }
}

export function* watchSendEmail() {
  yield takeLatest(sendEmailRequest.type, sendEmail);
}
