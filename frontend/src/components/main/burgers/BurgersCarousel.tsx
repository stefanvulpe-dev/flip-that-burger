import Carousel, { ControlProps } from 'nuka-carousel';
import { Link } from 'react-router-dom';
import { menuItems } from '../../../data/MenuItems';
import { faCartShopping, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowWidth } from '../../../hooks/WindowWidth';

export function BurgersCarousel() {
  const numberToShow = useWindowWidth();

  return (
    <Carousel
      slidesToShow={numberToShow}
      autoplay={true}
      autoplayReverse={true}
      autoplayInterval={3000}
      renderCenterLeftControls={() => {
        return <div className='hidden'></div>;
      }}
      renderCenterRightControls={() => {
        return <div className='hidden'></div>;
      }}
      renderBottomCenterControls={(props: ControlProps) => {
        return (
          <ul className='relative flex gap-4 top-10'>
            {menuItems
              .slice(0, menuItems.length - numberToShow + 1)
              .map((item, index) => (
                <li key={item.id}>
                  <button
                    aria-label='next'
                    type='button'
                    onClick={() => props.goToSlide(index)}
                    className={`${
                      props.currentSlide === index
                        ? 'text-accent-200'
                        : 'text-accent-400'
                    }`}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className='text-xs border-2 border-solid border-neutral-300 rounded-full'
                    />
                  </button>
                </li>
              ))}
          </ul>
        );
      }}
      cellSpacing={20}>
      {menuItems.map(item => (
        <div
          key={item.id}
          className='text-center rounded-xl border-2 border-solid border-neutral-500 min-h-[36rem] grid gap-4 place-items-center'>
          <h3 className='text-xl font-bold text-neutral-300 pt-8'>
            {item.name}
          </h3>
          <p className='text-neutral-300'>
            {item.ingredients.reduce((acc, item) => acc + ', ' + item)}
          </p>
          <p className='text-accent-200 font-bold text-2xl'>${item.price}</p>
          <Link
            to='/order'
            className='block w-max text-accent-200 text-sm border-2 border-accent-200 uppercase font-semibold rounded-full px-6 py-2 hover:bg-accent-200 hover:text-accent-400 transition-colors'>
            <FontAwesomeIcon icon={faCartShopping} className='pr-2' />
            Order now
          </Link>
          <img src={item.image} alt='burgerImage' className='max-w-[15rem]' />
        </div>
      ))}
    </Carousel>
  );
}
