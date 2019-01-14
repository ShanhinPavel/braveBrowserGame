/* eslint-disable quote-props */
/*
*There are collections with tasks conditions*
*/
const mathCollection = {
  '50 + 10 =': 60,
  '80 / 10 = ': 8,
  '25 * 2 =': 50,
  '42 - 11 =': 31,
};

const engToRuDictionary = {
  table: 'стол доска',
  cat: 'котик кошка котэ киса',
  raven: 'ворон ворона',
  horse: 'лошадь лошадка конь кобыла жеребец',
  brush: 'щетка',
  sheep: 'овца овечка',
  dog: 'собака пес',
  ship: 'корабль лодка шлюбка баржа',
};

const ruToEngDictionary = {
  'компьютер': 'computer pc ',
  'чашка': 'cup, boul',
  'мышь': 'mouse',
  'дерево': 'tree',
  'чемодан': 'suitcase',
  'ящик': 'box',
  'шар': 'ball',
  'лист': 'sheet leafe',
};

const audioLinks = {
  backpack: 'рюкзак портфель',
  car: 'машина авто автомобиль',
  nature: 'природа натура',
  picture: 'картина картинка фото фотография',
  cup: 'кубок чаша кружка',
  mouse: 'мышь',
  box: 'короб коробка ящик',
  fire: 'огонь пламя',
};

const nameOfTasks = {
  math: 'Solve math expression',
  listening: 'Listen and write word',
  ruEngTranslate: 'Translate word into English',
  engRuTranslate: 'Translate word into Russian',
};


export {
  mathCollection, engToRuDictionary, nameOfTasks, ruToEngDictionary, audioLinks,
};
