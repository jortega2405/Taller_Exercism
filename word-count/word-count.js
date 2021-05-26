//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  return phrase
    .toLowerCase()
    .match(/([A-Za-z0-9]'[A-Za-z0-9]|[A-Za-z0-9])+/g)
    .reduce((dict, word) => {
      const current = dict[word] || 0;
      dict[word] = current + 1;
      return dict;
    }, {});
};