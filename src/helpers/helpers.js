import { isValidPhoneNumber } from "libphonenumber-js";
import * as EmailValidator from "email-validator";
import * as checkIp from "check-ip";

const reFullName = /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/;
const reNickName = /(^[@A-Za-z]{1}[A-Za-z]{1}([a-z]{0,14})?( )?$)|(^[@A-ZА-Яа-я]{1}[A-ZА-Яа-я]{1}([а-я]{0,14})?( )?$)/;

export const getEntity = (str) => {
  const value = str;
  const result = {
    id: Date.now(),
    value: value,
    type: "any",
  };
  const isNumber = isValidPhoneNumber(value, "RU") ? "Tel" : false;
  const isEmail = EmailValidator.validate(value) ? "Email" : false;
  const isIp = checkIp(value).isValid ? "Ip" : false;
  const isFullName = reFullName.test(value) ? "Fullname" : false;
  const isNickName = reNickName.test(value) ? "Nickname" : false;

  const arrValidats = [isNumber, isEmail, isFullName, isNickName, isIp];

  arrValidats.forEach((e) => {
    if (e) {
      result.type = e;
    }
  });
  return result;
};
