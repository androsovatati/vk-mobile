import camelcaseKeys from "camelcase-keys";

export const deepCamelCase = data => camelcaseKeys(data, { deep: true });
