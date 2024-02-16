import { useRef } from 'react';
import Editor, { type Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import EditorStyles from './components/Editor.module.css';

function App() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  function handleEditorDidMount(
    editor: monaco.editor.IStandaloneCodeEditor,
    _monaco: Monaco
  ) {
    editorRef.current = editor;
  }

  function showValue() {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  }

  return (
    <>
      <div className={EditorStyles.Editor}>
        <button onClick={showValue}>Show value</button>
        <Editor
          height='90vh'
          defaultLanguage='javascript'
          defaultValue='// some comment'
          onMount={handleEditorDidMount}
        />
      </div>
    </>
  );
}

export default App;
