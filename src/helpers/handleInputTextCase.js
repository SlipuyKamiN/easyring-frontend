export const handleInputTextCase = (target, setValue) => {
  const { name, value } = target;
  const set = (v) => setValue(name, v);

  switch (target.name) {
    case "login":
      set(value.toLowerCase());
      break;
    case "carNumber":
      set(value.toUpperCase());
      break;

    default:
      break;
  }
};
