
const Note = ({ note, toggleImportance }) => {
    const label = note.important
      ? 'make not important' : 'make important'
  
    return (
      <li className='note'>
        {note.content} 
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
  }
  
  export default Note
  :blog:
  list:
  warning:
  clone:
  app:
  user:
  git:
  http:
  notice:
  ex:
  com:
  frontend:
  use:
  rm:
  fr:
  div:
  














  