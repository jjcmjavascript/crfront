export const getSecureId = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  const numbers = Array.from({ length: 10 }, (_, i) => i);
  const all = alphabet.concat(numbers);
  const firtsLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();

  return firtsLetter.concat(Array.from({ length: 10 }, () => all[Math.floor(Math.random() * all.length)]).join(''));
};
