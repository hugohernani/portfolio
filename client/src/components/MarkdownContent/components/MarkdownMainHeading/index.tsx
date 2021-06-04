import React, { useCallback, useMemo } from 'react';
import { IMarkdownMainHeading } from '../../interfaces';

const MarkdownMainHeading: React.FC<IMarkdownMainHeading> = ({ level, children, node }) => {
  const normalizedId = useCallback((heading: string) => {
    return heading
      .replace(/\d+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join('_');
  }, []);

  return useMemo(() => {
    if (level == 1) {
      return (
        <h1 id={normalizedId(node.children[0].value as string)}>
          <a>{children} </a>
        </h1>
      );
    } else {
      return <div>{children}</div>;
    }
  }, [level, node, children]);
};

export default MarkdownMainHeading;
