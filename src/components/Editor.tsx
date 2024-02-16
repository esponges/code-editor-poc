import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';
import { EditorProps } from '@monaco-editor/react';

// alernative implementation of the Editor component
export const Editor = (props: EditorProps) => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        return monaco.editor.create(monacoEl.current!, {
          ...props,
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
            '\n'
          ),
          language: 'typescript',
        });
      });
    }

    return () => editor?.dispose();
  }, [monacoEl.current]);

  return (
    <div
      className={styles.Editor}
      ref={monacoEl}
    />
  );
};
