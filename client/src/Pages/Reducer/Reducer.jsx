

const Reducer = (state,action) => {
    switch(action.type){
       case "INCREMENT":{
           let updateState={
               ...state,
               count:state.count+1
           }
           return updateState
       }
       case "DECREMENT":{
           return{
           ...state,count:state.count-1
       }
   }
       default:return state;
   }
   }
   
   export const inc={type:"INCREMENT"}
   export const dec={type:"DECREMENT"}
   
   export {Reducer}