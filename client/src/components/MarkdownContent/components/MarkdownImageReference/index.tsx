import React, { useMemo } from 'react';
import { IMarkdownImage } from '../../interfaces';
import { Container } from './styles';

const MarkdownImageReference: React.FC<IMarkdownImage> = ({ src, alt }) => {
  return useMemo(
    () => (
      <Container>
        <img src={src} alt={alt} />
      </Container>
    ),
    [alt, src],
  );
};

export default MarkdownImageReference;
