export const TodoList = ({ todos, handleClearAll }) => {

    return (
        <div className='Todo-List'>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index + 'todo'} onClick={(e) => {
                e.target.classList.toggle('completed')
              }}>
                {todo}
              </li>
            )
          })}
          </ul>
          <div className='Todo-List-Footer'>
            <div className='Todo-List-Counter'>
              {`${todos.length} items left`}
            </div>
            <div className='Todo-List-Selector'>
              {/* all, active, completed */}
            </div>
            <div className='Todo-List-Cleaner'>
            <button onClick={() => {
              handleClearAll();
              }}>clear completed</button>
            </div>
          </div>
        </div>
    )
}