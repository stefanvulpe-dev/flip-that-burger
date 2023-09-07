import { OffersSection } from '../../components/index';
import { OffersGrid } from './OffersGrid';

export function OffersContainer() {
  return (
    <div className='w-11/12 max-w-6xl mx-auto'>
      <OffersSection>
        <OffersGrid />
      </OffersSection>
    </div>
  );
}
