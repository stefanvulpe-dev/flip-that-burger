import { PresentationSection, BurgersSection } from '../../components/index';
import { PromoContainer } from './PromoContainer';
import { OffersContainer } from './OffersContainer';

export function MainContainer() {
  return (
    <>
      <PresentationSection />
      <BurgersSection />
      <PromoContainer />
      <OffersContainer />
    </>
  );
}
