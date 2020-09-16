import formInputInfo from '../configs/formInput';

export default {
  formSection: {
    contactInfo: Object.values(formInputInfo)[0],
    passwordInfo: Object.values(formInputInfo)[1],
    errorsMessage: [],
  },
  formInfo: {},
  setFieldInfo(field) {
    Object.entries(field).forEach(([fieldName, fieldValue]) => {
      this.formInfo[fieldName] = fieldValue;
    });

    return this.formInfo;
  },
};
