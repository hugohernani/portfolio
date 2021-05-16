import React from 'react';

interface IImage {
  url: string;
  description: string;
  onImageMouseOut: (e: any) => void;
  onImageMouseOver: (e: any) => void;
}

const Image: React.FC<IImage> = ({ url, description, onImageMouseOver, onImageMouseOut }) => {
  return <img onMouseOver={onImageMouseOver} onMouseOut={onImageMouseOut} src={url} alt={description} />;
};

export default React.memo(Image);
