import React, { useMemo } from 'react';
import { Container } from './styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IMarkdownCode } from '../../interfaces';

const MarkdownBlockCode: React.FC<IMarkdownCode> = ({ language, value }) => {
  return useMemo(
    () => (
      <Container>
        <SyntaxHighlighter style={a11yDark as unknown} language={language}>
          {value}
        </SyntaxHighlighter>
      </Container>
    ),
    [language, value],
  );
};

export default MarkdownBlockCode;
