import { useLocation } from 'react-router';
import { Container } from './styles';

export const StatisticSheet = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const src = params.get('src');

  return (
    <Container>
      {src && <iframe src={src} />}
    </Container>
  );
};
