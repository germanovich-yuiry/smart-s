import { IData } from "../types/Data.type";
type PartialData = Partial<IData>;

export const formValidate = <T extends PartialData>(values: T): PartialData => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors: PartialData = {};

  if (!values.firstName) {
    errors.firstName = "Enter your name";
  }
  if (!values.email) {
    errors.email = "Enter your email";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Uncorrect email";
  }
  if (!values.country) {
    errors.country = "Enter your country";
  }
  if (!values.address) {
    errors.address = "Enter your address";
  }
  if (!values.city) {
    errors.city = "Enter your city";
  }
  if (!values.bio) {
    errors.bio = "Enter your bio";
  }

  return errors;
};
