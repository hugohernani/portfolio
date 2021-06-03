export interface IMarkdownRenderer {
  node: string;
  value: any;
}

export interface IMarkdownCode extends IMarkdownRenderer {
  language: string;
}

export interface IMarkdownImage {
  src: string;
  alt: string;
}
