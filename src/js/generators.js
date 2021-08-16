/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  yield new allowedTypes[Math.trunc(Math.random() * allowedTypes.length)](Math.trunc(Math.random() * maxLevel + 1));
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const characterGen = characterGenerator(allowedTypes, maxLevel);
  for (let i = 0; i < characterCount; i++) {
    characterGen.next();
  }
}
