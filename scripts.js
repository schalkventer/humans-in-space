import fetchWrapper from './modules/fetchWrapper.js';
import Space from './modules/Space.js';
import createAstronaut from './modules/createAstronuat.js';
import renderHtml from './modules/renderHtml.js';


const { getSpace, addItem } = new Space(5, 5);
const url = 'https://8p6o1pcool.execute-api.us-east-1.amazonaws.com/default/people-in-space';

const render = number => {
  document.body.innerHTML = renderHtml(getSpace(), number)
};
const addTooltips = () => tippy(document.querySelectorAll('.astronaut'), { arrow: true });


const updateUniverse = ({ people, number }) => {
  people.forEach((human, index) => addItem(
    createAstronaut(
      human.name,
      index + 3,
    )
  ));

  return number;
}


fetchWrapper(url)
  .then(updateUniverse)
  .then(render)
  .then(addTooltips)