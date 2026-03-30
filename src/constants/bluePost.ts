const linkFormatter = (href: string) => {

  const replacedText = href.toLowerCase().replace(/\s/g, "-")
  return replacedText
};


const BLUE_POSTS = [
  { title: "The easiest tier since Emerald Nightmare", author: "Ky'veza", age: "07/03/26", tags: ["warrior", "mage", "druid"], href: linkFormatter("The easiest tier since Emerald Nightmare") },
  { title: "Will Lu'ra just flop?", author: "The Jailer", age: "07/03/26", tags: ["paladin", "demon hunter", "monk"], href: linkFormatter("Will Lu'ra just flop") },
  { title: "M+ Classes you should be playing RIGHT NOW", author: "The Jailer", age: "07/03/26", tags: ["death knight", "shaman", "evoker"], href: linkFormatter("M+ Classes you should be playing RIGHT NOW") },
  { title: "PVP Classes you should be playing RIGHT NOW", author: "The Jailer", age: "07/03/26", tags: ["hunter", "priest", "warlock"], href: linkFormatter("PVP Classes you should be playing RIGHT NOW") },
];

export default BLUE_POSTS;