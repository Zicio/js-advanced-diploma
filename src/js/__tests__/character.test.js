import Character from '../Character';
import Daemon from '../Daemon';

test('should return an error when creating an instance', () => {
  expect(() => new Character(1, 'Daemon')).toThrow("You can't create instances through the Character class");
});

test('shouldn\'t return an error when creating an instance', () => {
  expect(new Daemon(1)).toEqual({
    level: 1,
    health: 50,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  });
});
