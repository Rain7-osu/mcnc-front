import { useMemo } from 'react';

export const VideoList = ({
  videos,
}: {
  videos: string[];
}) => {
  const data = useMemo(() => videos.map((item, index) => ({ item, index })), [videos]);
  return (
    <div className="video-list">
      {data.map(({ index, item }) => (
        <div
          className="video-item"
          key={index}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </div>
  );
};
