const shortName = (text) => {
  const makeShort = text.split(" ").slice(0, 3).join(" ");
  return makeShort;
};
export { shortName };
