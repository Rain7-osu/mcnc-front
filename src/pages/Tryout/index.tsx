import { TryoutContent } from './TryoutContent';
import { TryoutPageContainer } from './styles';
import { useTryoutContent } from './hooks';

export const Tryout = () => {
  const content = useTryoutContent();

  return (
    <TryoutPageContainer>
      <TryoutContent content={content} />
    </TryoutPageContainer>
  );
};
