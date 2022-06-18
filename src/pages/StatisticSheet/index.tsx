import { useLocation } from 'react-router';

export const StatisticSheet = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const src = params.get('src');

  return (
    <>
      {src && <iframe src={src} width={960} height={960} />}
    </>
  );
};
