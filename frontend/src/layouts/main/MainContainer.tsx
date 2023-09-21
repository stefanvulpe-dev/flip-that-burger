import burgerImage from '../../assets/main/section-burger.png';
import { BurgersSection, PresentationSection } from '../../components';
import { OffersContainer, PromoContainer } from './';

export function MainContainer() {
  return (
    <>
      <PresentationSection
        subtitle='Welcome'
        title='We make the best burgers in town'
        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
        consectetur! Similique optio corporis quos expedita dignissimos iusto
        inventore iste adipisci.'
        link='/flip-that-burger/about'
        linkText='More about us'
        image={burgerImage}
      />
      <BurgersSection />
      <PromoContainer />
      <OffersContainer />
    </>
  );
}
