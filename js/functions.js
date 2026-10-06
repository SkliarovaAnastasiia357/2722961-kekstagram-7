function checkLength(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome(string) {
  const normalised = string.toLowerCase().replace(/\s/g, '');
  const reversed = normalised.split('').reverse().join('');
  return normalised === reversed;
}

export { isPalindrome, checkLength };
