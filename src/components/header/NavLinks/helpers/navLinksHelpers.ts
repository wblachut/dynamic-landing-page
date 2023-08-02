export const getLinkName = (link: string) => {
  const substring = link.substring(1);
  return substring.charAt(0).toUpperCase() + substring.slice(1);
};
