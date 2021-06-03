import React, { useMemo } from 'react';
import { IMarkdownRenderer } from '../../interfaces';
import { Blockquote, Container } from './styles';

const MarkdownBlockquote: React.FC<IMarkdownRenderer> = ({ children }) => {
  return useMemo(
    () => (
      <Container>
        <Blockquote>{children}</Blockquote>
      </Container>
    ),
    [children],
  );
};

export default MarkdownBlockquote;
