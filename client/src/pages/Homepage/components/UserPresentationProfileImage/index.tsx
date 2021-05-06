import React, { useCallback, useMemo, useState } from 'react';
import { IUserProfileImage } from '../../interfaces';

const UserPresentationProfileImage: React.FC<IUserProfileImage> = ({ url, hoverUrl, description }) => {
  const [sourceUrl, setSourceUrl] = useState(url);

  const onImageOver = useCallback(() => {
    setSourceUrl(hoverUrl);
  }, [hoverUrl]);

  const onImageOut = useCallback(() => {
    setSourceUrl(url);
  }, [url]);

  return useMemo(() => <img onMouseOver={onImageOver} onMouseOut={onImageOut} src={sourceUrl} alt={description} />, [
    description,
    onImageOut,
    onImageOver,
    sourceUrl,
  ]);
};

export default UserPresentationProfileImage;
