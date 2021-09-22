import type { Principal } from '@dfinity/principal';
export interface ToDo {
  'id' : bigint,
  'completed' : boolean,
  'description' : string,
}
export interface _SERVICE {
  'addTodo' : (arg_0: string) => Promise<undefined>,
  'clearCompleted' : () => Promise<undefined>,
  'completeTodo' : (arg_0: bigint) => Promise<undefined>,
  'getTodos' : () => Promise<Array<ToDo>>,
  'showTodos' : () => Promise<string>,
}
