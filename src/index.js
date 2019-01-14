/* eslint-disable no-undef */
import { homePage } from './screens/home/index';
import { login } from './screens/login/index';
import { score } from './screens/score/index';
import { contacts } from './screens/contacts/index';
import { audioButtonLinks } from './screens/home/data/data';


// startGame
homePage.render(login, score, contacts, audioButtonLinks);
