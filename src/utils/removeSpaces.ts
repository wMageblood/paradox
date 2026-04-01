const removeSpaces = (href: string) => {
  const replacedText = href.toLowerCase().replace(/\s/g, "-")
  return replacedText
};


export default removeSpaces;