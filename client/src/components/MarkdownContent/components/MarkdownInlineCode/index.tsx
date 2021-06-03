import React, { useMemo } from 'react';
import { IMarkdownRenderer } from '../../interfaces';
import { InlineCode } from './styles';

const MarkdownInlineCode: React.FC<IMarkdownRenderer> = ({ value }) => {
  return useMemo(() => <InlineCode>{value}</InlineCode>, [value]);
};

export default MarkdownInlineCode;
