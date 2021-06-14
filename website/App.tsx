import React, { useRef, useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import rehypeAttr from 'rehype-attr';
import Code, { CodeProps } from './Code';
import logo from './logo.svg';
import './App.css';
import Button from '../';
import MDStr from '../README.md';

const getCodeStr = (data: any[] = [], code: string = '') => {
  data.forEach((node) => {
    if (node.type === 'text') {
      code += node.value;
    } else if (node.children && Array.isArray(node.children)) {
      code += getCodeStr(node.children);
    }
  });
  return code;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <GitHubCorners fixed href="https://github.com/kktjs/kkt" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div>
          <Button type="primary">Primary</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="danger">Danger</Button>
          <Button type="light">Light</Button>
          <Button type="dark">Dark</Button>
        </div>
      </header>
      <MarkdownPreview
        source={MDStr}
        className="info"
        rehypePlugins={[[rehypeAttr, { properties: 'attr' }]]}
        components={{
          /**
           * bgWhite 设置代码预览背景白色，否则为格子背景。
           * noCode 不显示代码编辑器。
           * noPreview 不显示代码预览效果。
           * noScroll 预览区域不显示滚动条。
           * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
           */
          code: ({ inline, node, noPreview, noScroll, bgWhite, noCode, codePen, codeSandbox, ...props }) => {
            const conf = { noPreview, noScroll, bgWhite, noCode, codePen, codeSandbox } as CodeProps;
            if (noPreview || noScroll || bgWhite || noCode || codePen || codeSandbox) {
              return (
                <Code
                  {...conf}
                  code={getCodeStr(node.children)}
                  dependencies={{ useRef, useEffect, useState, Button }}
                  language={(props.className || '').replace(/^language-/, '')}
                />
              );
            }
            return <code {...props} />;
          },
        }}
      />
    </div>
  );
};

export default App;
