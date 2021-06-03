import React, { useCallback, useMemo } from 'react';
import { IMarkdownRenderer } from '../../interfaces';
import { Paragraph } from './styles';

interface ReactChildren {
  children: {
    type: {
      name: string;
    };
  }[];
}

const MarkdownParagraph: React.FC<IMarkdownRenderer & ReactChildren> = ({ children }) => {
  const hasImage = useCallback(() => {
    const firstChildTypeName = children[0].type.name;
    return firstChildTypeName === 'MarkdownImage' || firstChildTypeName === 'MarkdownImageReference';
  }, [children]);

  const markdownRender = useMemo(() => {
    if (hasImage()) {
      return <React.Fragment>{children}</React.Fragment>;
    } else {
      return <Paragraph>{children}</Paragraph>;
    }
  }, [children, hasImage]);

  return markdownRender;
};

export default MarkdownParagraph;
