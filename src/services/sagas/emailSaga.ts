import { call, put, takeLatest } from "redux-saga/effects";
import emailjs from "emailjs-com";

import {
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailFailure,
} from "../../slices/emailSlice";
import moment from "moment";

function* sendEmail(action) {
  try {
    const { userData } = action.payload;
    const timestamp = moment().format("DD/MM/YYYY HH:mm");

    // Настройте EmailJS с вашими данными
    const serviceID = "service_k25bmr9"; // Замените на ваш ID сервиса
    const templateID = "template_02y4hye"; // Замените на ваш ID шаблона
    const userID = "vFtSy7qZN4WD1_TsM"; // Замените на ваш ID пользователя

    const templateParams = {
      to_email: userData.email,
      user_data: JSON.stringify(userData),
      timestamp,
    };

    yield call(emailjs.send, serviceID, templateID, templateParams, userID);
    yield put(sendEmailSuccess());
  } catch (error) {
    yield put(sendEmailFailure(error.message));
  }
}

export function* watchSendEmail() {
  yield takeLatest(sendEmailRequest.type, sendEmail);
}
