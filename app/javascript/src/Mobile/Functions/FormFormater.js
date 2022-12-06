export function formatNumberOnly(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;
  const number = value.replace(/[^\d]/g, '').replace(/\s+/g,'');
  const length = number.length;

  return number;
}

export function formatPhoneNumber(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, '');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less than four digits
  // this is to avoid weird behavior that occurs if you  format the area code too early
  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

export function formatPostalCode(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  const postalCode = value.replace(/\s+/g,'').toUpperCase();

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const postalCodeLength = postalCode.length;

  // we need to return the value with no formatting if its less than four digits
  // this is to avoid weird behavior that occurs if you  format the area code too early
  if (postalCodeLength <= 3) return postalCode;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (postalCodeLength > 3) {
    return `${postalCode.slice(0, 3)} ${postalCode.slice(3, 6)}`;
  }
}

export function formatCardNumber(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  const cardNumber = value.replace(/[^\d]/g, '').replace(/\s+/g,'');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const cardNumberLength = cardNumber.length;

  // we need to return the value with no formatting if its less than four digits
  // this is to avoid weird behavior that occurs if you  format the area code too early
  if (cardNumberLength <= 4) {
    return cardNumber;
  } else if (cardNumberLength > 4 && cardNumberLength <= 8) {
    return `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)}`;
  } else if (cardNumberLength > 8 && cardNumberLength <= 12) {
    return `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)}`;
  } else {
    return `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`;
  }
}
