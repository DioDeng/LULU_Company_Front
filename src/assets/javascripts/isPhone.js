export default function isPhone(num) {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(num) ? true : '需要正確的電話號碼';
}
