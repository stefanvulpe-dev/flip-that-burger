import Carousel, { ControlProps } from 'nuka-carousel';
import { Link } from 'react-router-dom';
import { menuItems } from '../../../data/MenuItems';
import {
  faAngleLeft,
  faAngleRight,
  faCartShopping,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowWidth } from '../../../hooks/WindowWidth';

export function BurgersCarousel() {
  const numberToShow = useWindowWidth();

  return (
    <Carousel
      slidesToShow={numberToShow}
      renderCenterLeftControls={(props: ControlProps) => {
        return (
          <button
            aria-label='next'
            type='button'
            onClick={() => props.previousSlide()}
            className='relative -left-10'>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className='text-2xl text-neutral-300 rounded-full'
            />
          </button>
        );
      }}
      renderCenterRightControls={(props: ControlProps) => {
        return (
          <button
            aria-label='next'
            type='button'
            onClick={() => props.nextSlide()}
            className='relative -right-10'>
            <FontAwesomeIcon
              icon={faAngleRight}
              className='text-2xl text-neutral-300 rounded-full'
            />
          </button>
        );
      }}
      renderBottomCenterControls={(props: ControlProps) => {
        return (
          <ul className='relative flex gap-4 top-10'>
            {menuItems
              .slice(0, menuItems.length - numberToShow + 1)
              .map((_, index) => (
                <li key={index}>
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
        <div className='text-center rounded-xl border-2 border-solid border-neutral-500 min-h-[36rem] grid gap-4 place-items-center'>
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
