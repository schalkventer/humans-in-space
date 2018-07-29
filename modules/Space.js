import { getRandomNum } from './helpers.js';


class Space {
  constructor(columns, rows, base = '&nbsp;') {
    if (typeof columns !== 'number' || typeof rows !== 'number') {
      throw new Error('Space \'columns\' and \'rows\' need to be numbers');
    }

    this.rowsKey = Symbol('This key used to store row values in Space class');
    this[this.rowsKey] = [];
    
    this.baseKey = Symbol('This key used to store the base string in Space class');
    this[this.baseKey] = base;
    
    this.getRow = () => getRandomNum(rows)
    this.getCol = () => getRandomNum(columns)
    
    for (let i = 0; i < rows; i++) {
      this[this.rowsKey]
        .push(new Array(columns)
          .fill(this[this.baseKey])
        );
    }

    this.getSpace = this.getSpace.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  
  addItem(value) {
    const tryAdding = () => {
      const row = this.getRow();
      const column = this.getCol();

      if (this[this.rowsKey][row][column] === this[this.baseKey]) {
        this[this.rowsKey][row][column] = value;
        return null;
      }
      
      tryAdding();
    }
    
    tryAdding();
    return null;
  }
  
  getSpace() {
    return this[this.rowsKey];
  }
}


export default Space;