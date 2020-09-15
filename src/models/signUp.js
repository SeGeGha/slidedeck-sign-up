export default {
  fieldsInfo: {},
  setFieldInfo(field) {
    Object.entries(field).forEach(([fieldName, fieldValue]) => {
      this.fieldsInfo[fieldName] = fieldValue;
    });
  },
};
