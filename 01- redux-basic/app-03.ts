import { reducer } from './contador/contador.reducer';


class Stro<T>{

   /*  private state: T; */

    constructor(
        private reducer,
        private state: T
    ){
/*         this.state = state; */
    }

}