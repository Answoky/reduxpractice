import { Reducer, Action } from './ngrx-fake/ng-rx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';


class Store<T>{

   /*  private state: T; */

    constructor(
        private reducer: Reducer<T>,
        private state: T
    ){
/*         this.state = state; */
    }

    getState(){
        return this.state;
    }

    dispath(action: Action){
        this.state = this.reducer(this.state, action);
    }

}

const store = new Store( contadorReducer, 10 );

console.log( store.getState() );

console.log( store.dispath(incrementadorAction));

console.log( store.getState() );
