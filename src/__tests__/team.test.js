import Team from '../team';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test.each([
  [
    'Error',
    'Персонаж уже добавлен в команду'
  ]
])// eslint-disable-next-line
('testing add method with %s', (_, expected) => {
  const AliseB = new Bowman('Alise', 'Bowman');
  const AliseU = new Undead('Alise', 'Undead');
  const Dima = new Bowman('Dima', 'Bowman');
  const characters = [AliseB, Dima, AliseU, AliseB];
  const team = new Team();

  function result() {
    characters.forEach(character => team.add(character));
  }
  
  expect(result).toThrow(expected);
});

test.each([
  [
    'multiple characters',
    [
      {
        name: 'Ann',
        type: 'Magician',
        health: 100,
        level: 1,
        _attack: 10,
        defence: 40,
        range: undefined,
        _stoned: undefined
      },
      {
        name: 'Dima',
        type: 'Daemon',
        health: 100,
        level: 1,
        _attack: 10,
        defence: 40,
        range: undefined,
        _stoned: undefined
      },
      {
        name: 'Bim',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
      }
    ]
  ]
])// eslint-disable-next-line
('testing add method with %s', (_, expected) => {
  const Ann = new Magician('Ann', 'Magician');
  const Dima = new Daemon('Dima', 'Daemon');
  const Bim = new Swordsman('Bim', 'Swordsman');
  const characters = [Ann, Dima, Bim];
  const team = new Team();

  characters.forEach(character => team.add(character));

  team.toArray().forEach((elem, index) => expect(elem).toEqual(expected[index]));
});

test.each([
  [
    '3 characters',
    [
      {
        name: 'Ann',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
      },
      {
        name: 'Dima',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
      },
      {
        name: 'Bim',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
      }
    ]
  ]
])// eslint-disable-next-line
('testing addAll method with %s', (_, expected) => {
  const Ann = new Zombie('Ann', 'Zombie');
  const Dima = new Bowman('Dima', 'Bowman');
  const Bim = new Swordsman('Bim', 'Swordsman');
  const team = new Team();

  team.addAll(Ann, Dima, Bim);

  team.toArray().forEach((elem, index) => expect(elem).toEqual(expected[index]));
});