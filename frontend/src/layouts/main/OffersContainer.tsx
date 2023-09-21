import { OffersSection } from '../../components';
import { OffersGrid } from './';

export function OffersContainer() {
  return (
    <div className='w-11/12 max-w-6xl mx-auto'>
      <OffersSection>
        <OffersGrid />
      </OffersSection>
    </div>
  );
}
