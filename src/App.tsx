import { useRef } from 'react';
import { type Monaco } from '@monaco-editor/react';
import { Editor} from './components/Editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: monaco, _monaco: Monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  }

  return (
    <>
      <div>
        <button onClick={showValue}>Show value</button>
        <Editor
          // height='90vh'
          // defaultLanguage='javascript'
          // defaultValue='// some comment'
          // onMount={handleEditorDidMount}
        />
      </div>
    </>
  );
}

export default App;
