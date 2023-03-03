import assertString from "./util/assertString";

export default function toDate(date) {
  console.log("james is here toDATE");
  assertString(date);

  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
