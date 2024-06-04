/**
 * 手机号校验
*/
export const mobileCheck = (mobileNumber) => {
  return /^[1][3,4,5,7,8][0-9]{9}$/.test(mobileNumber);
}