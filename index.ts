export const isValid = (input: string) => {
  if (typeof input !== 'string') {
    return false;
  }

  const postalCode = input.replace(/\D/g, '');
  const containsInvalidStart = /^32|^48|^49|^99/.test(postalCode);

  return (
    postalCode.length === 5 &&
    postalCode > '10000' &&
    postalCode < '99000' &&
    !containsInvalidStart
  );
};