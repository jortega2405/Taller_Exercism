
const alphabet = 26;

export const isPangram = letters =>
  letters.replace(/([a-z])(?=.*\1)|[^a-z]/gi, '').length === alphabet;

