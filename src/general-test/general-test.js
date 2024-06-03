
/**
 * 手机号校验
*/
const mobileCheck = (mobileNumber) => {
  return /^[1][3,4,5,7,8][0-9]{9}$/.test(mobileNumber);
}

/**
 * 身份证校验
*/
const IDNumberCheck = (IDNumber) => {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(IDNumber);
}

/**
 * 邮箱校验
*/
const EmailCheck = (EmailNumber) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(EmailNumber);
}

/**
 * 日期/时间 - 转换/拼接
*/
function TurnDate() {
  console.log('敬请期待...');
}

export {
  mobileCheck,
  IDNumberCheck,
  EmailCheck,
  TurnDate
}