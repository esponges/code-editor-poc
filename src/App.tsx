import { useRef, useState } from 'react';
import Editor, { type Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import EditorStyles from './components/Editor.module.css';

function App() {
  const [language, setLanguage] = useState('typescript');
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
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value='javascript'>JavaScript</option>
          <option value='typescript'>TypeScript</option>
          <option value='python'>Python</option>
          <option value='java'>Java</option>
          <option value='csharp'>C#</option>
          <option value='go'>Go</option>
        </select>
        <Editor
          height='90vh'
          theme='vs-dark'
          defaultLanguage='typescript'
          language={language}
          defaultValue='// some comment'
          onMount={handleEditorDidMount}
        />
      </div>
    </>
  );
}

export default App;
