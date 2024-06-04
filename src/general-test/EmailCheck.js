/**
 * 邮箱校验
*/
export const EmailCheck = (EmailNumber) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(EmailNumber);
}