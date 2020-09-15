const createError = (target, property, value, message) => {
  return {
    target,
    property,
    value,
    constraints: {
      length: message,
    },
  };
};

const validator = (obj) => {
  const errors = [];
  const isDifferentPassword = (obj['Password'] !== obj['Repeat Password']);
  const isIncorrectFullName = (obj['Full name'].length < 5);
  const isIncorrectCompanyName = (obj['Company'].length < 3);

  if (isIncorrectFullName) {
    const invalidProp = 'Full name';
    errors.push(createError(obj, invalidProp, obj[invalidProp], 'Full name must be more than 5 characters long'))
  }

  if (isIncorrectCompanyName) {
    const invalidProp = 'Company';
    errors.push(createError(obj, invalidProp, obj[invalidProp], 'Company name must be more than 3 characters long'))
  }

  if (isDifferentPassword) {
    const invalidProp = 'Repeat Password';
    errors.push(createError(obj, invalidProp, obj[invalidProp], 'You entered different passwords'))
  }

  return errors;
};

export default validator;
