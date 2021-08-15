/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  yield allowedTypes[Math.trunc(Math.random() * allowedTypes.length)];
  // TODO: write logic here
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
}
