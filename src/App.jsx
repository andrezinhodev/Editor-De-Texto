import { useRef, useState } from 'react';
import EditorText from 'jodit-react'
import './App.css';



function App() {


const editor = useRef(null);
const [content, setContent] = useState('');

const handleUpdate = (event) => {
  const editContent = event.targer.value
  setContent(editContent)
}

const config = {
  readonly: false,
  heigth: 400
}
  return (
    <div className='App'>
      <EditorText>
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={newContent => {}}
      </EditorText>

    </div>
  )
}

export default App;
