export interface IMarkdownRenderer {
  node: any;
  value: any;
}

export interface IMarkdownCode extends IMarkdownRenderer {
  language: string;
}

export interface IMarkdownMainHeading extends IMarkdownRenderer {
  level: number;
}

export interface IMarkdownImage {
  src: string;
  alt: string;
}
