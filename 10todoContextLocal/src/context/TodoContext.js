import {createContext,useContext} from 'react'

export const TodoContext = createContext({   //create a context
    todos : [
        {
            id: 1,
            todo : "Todo Message",
            completed : false
        },
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
})

export const useTodo = ()=>{
   return useContext(TodoContext)   // useContect require a context
}

export const TodoProvider = TodoContext.Provider  // export a provider