import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import MarkdownBlockCode from './components/MarkdownBlockCode';
import MarkdownBlockquote from './components/MarkdownBlockquote';
import MarkdownImage from './components/MarkdownImage';
import MarkdownImageReference from './components/MarkdownImageReference';
import MarkdownInlineCode from './components/MarkdownInlineCode';
import MarkdownList from './components/MarkdownList';
import MarkdownListItem from './components/MarkdownListItem';
import MarkdownParagraph from './components/MarkdownParagraph';

interface IMarkdownContent {
  readonly content: string;
}

const MarkdownContent: React.FC<IMarkdownContent> = ({ content }) => {
  const renderers = useMemo(
    () => ({
      list: MarkdownList,
      listItem: MarkdownListItem,
      image: MarkdownImage,
      imageReference: MarkdownImageReference,
      inlineCode: MarkdownInlineCode,
      code: MarkdownBlockCode,
      blockquote: MarkdownBlockquote,
      paragraph: MarkdownParagraph,
    }),
    [],
  );

  const plugins = useMemo(() => [gfm], []);

  return useMemo(
    () => (
      <ReactMarkdown className="card-text" renderers={renderers} plugins={plugins}>
        {content}
      </ReactMarkdown>
    ),
    [content, plugins, renderers],
  );
};

export default MarkdownContent;
