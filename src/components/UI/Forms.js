export const checkEmailIsValid = (email) => {
  const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email !== '' && email !== 'undefined' && regex.test(email);
};

export const checkPhoneIsValid = (phone) => {
  const regex = /(01[0])([0-9]{4})([0-9]{4})$/;
  return phone !== '' && phone !== 'undefined' && regex.test(phone);
};
