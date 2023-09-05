import {
  faCircleInfo,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { PromoSection } from '../../components/index';

export function PromoContainer() {
  return (
    <div className='bg-neutral-400 bg-promo-mobile lg:bg-promo-desktop bg-no-repeat bg-center py-4 mt-10'>
      <div className='w-11/12 max-w-6xl mx-auto md:flex justify-between items-center'>
        <PromoSection
          title='Choose what you want, select a pick up time'
          subtitle='Delivery'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque voluptates adipisci? Eligendi voluptate nulla aut necessitatibus hic nemo doloribus.'
          buttonText='Order online'
          icon={faShoppingCart}
        />
        <PromoSection
          title='Earn points every time you order online'
          subtitle='Rewards'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque voluptates adipisci? Eligendi voluptate nulla aut necessitatibus hic nemo doloribus.'
          buttonText='Learn more'
          icon={faCircleInfo}
        />
      </div>
    </div>
  );
}
