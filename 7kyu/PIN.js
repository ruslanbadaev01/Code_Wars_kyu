function validatePIN(pin) {
  let res = parseInt(pin);
  if (pin % 1 == 0 && res >= 0 && [4, 6].includes(pin.length)) {
    return true;
  } else {
    return false;
  }
}
