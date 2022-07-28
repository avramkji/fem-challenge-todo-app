export const TodoList = () => {
    return (
        <div className='Todo-List'>
          <ul>
            <li>Jog around the park</li>
            <li>10 minute meditation</li>
          </ul>
          <div className='Todo-List-Footer'>
            <div className='Todo-List-Counter'>
              {/* x items left */}
            </div>
            <div className='Todo-List-Selector'>
              {/* all, active, completed */}
            </div>
            <div className='Todo-List-Cleaner'>
              <button>clear completed</button>
            </div>
          </div>
        </div>
    )
}