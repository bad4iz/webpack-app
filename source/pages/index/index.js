import './index.scss';
import 'normalize.css';

import createMenu from '../../components/menu/menu';

const menu = createMenu(['Главная', 'Обо мне', 'Портфолио'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');


