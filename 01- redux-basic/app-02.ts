
import { Action } from './ngrx-fake/ng-rx';
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions';
import { reducer } from './contador/contador.reducer';



//Actions
console.log(reducer(10, incrementadorAction)); //11
console.log(reducer(10, decrementadorAction)); //9
console.log(reducer(10, multiplicarAction)); //20
console.log(reducer(10, dividirAction)); //20
console.log(reducer(10, resetAction)); //0