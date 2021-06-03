import React, { useMemo } from 'react';
import { IMarkdownRenderer } from '../../interfaces';
import { List } from './styles';

const MarkdownList: React.FC<IMarkdownRenderer> = ({ children }) => {
  return useMemo(() => <List>{children}</List>, [children]);
};

export default MarkdownList;
