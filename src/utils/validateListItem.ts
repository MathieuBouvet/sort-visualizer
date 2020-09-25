export default function validateListItem(
  value: string
): { isValid: boolean; value: number | "" | "-" } {
  const parsed = parseInt(value);
  if (value === "" || value === "-") {
    return {
      isValid: true,
      value,
    };
  } else if (!isNaN(parsed)) {
    return {
      isValid: true,
      value: parsed,
    };
  }
  return {
    isValid: false,
    value: "",
  };
}
