import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({ id }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-bold text-zinc-200">Your Tasks</h2>
        <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-bold rounded-full uppercase tracking-wider">
          {todos.length} Items
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900/30 rounded-3xl border border-dashed border-zinc-800">
          <p className="text-zinc-500 font-medium">No tasks yet. Enjoy your day! ✨</p>
        </div>
      ) : (
        <ul className="grid gap-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="group flex items-center justify-between gap-4 bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-4 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => handleToggleTodo(todo.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    todo.completed
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-zinc-700 hover:border-indigo-500"
                  }`}

                >
                  {todo.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span
                  className={`text-lg font-medium transition-all duration-300 ${
                    todo.completed
                      ? "text-zinc-500 line-through opacity-50"
                      : "text-zinc-200"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-200"
                aria-label="Delete task"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
