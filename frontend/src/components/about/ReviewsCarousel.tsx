import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel, { ControlProps } from 'nuka-carousel';
import { testimonials } from '../../data/Testimonials';

export function ReviewsCarousel() {
  return (
    <Carousel
      slidesToShow={1}
      renderCenterLeftControls={(props: ControlProps) => {
        return (
          <button
            aria-label='next'
            type='button'
            onClick={() => props.previousSlide()}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className='text-2xl text-neutral-300'
            />
          </button>
        );
      }}
      renderCenterRightControls={(props: ControlProps) => {
        return (
          <button
            aria-label='next'
            type='button'
            onClick={() => props.nextSlide()}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className='text-2xl text-neutral-300'
            />
          </button>
        );
      }}
      renderBottomCenterControls={(props: ControlProps) => {
        return (
          <ul className='relative flex gap-4 top-10'>
            {testimonials.map((_, index) => (
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
      {testimonials.map(testimonial => (
        <div className='max-w-[25rem] mx-auto text-center rounded border-2 border-solid border-neutral-500 grid gap-4 place-items-center  md:max-w-3xl'>
          <img
            src={testimonial.image}
            alt='burgerImage'
            className='w-full md:max-w-[20rem] aspect-square md:row-span-2 md:justify-self-start'
          />
          <p className='px-4'>{testimonial.opinion}</p>
          <p className='font-semibold md:col-start-2 md:col-end-3'>
            {testimonial.name}
            <span className='block text-neutral-500'>{testimonial.job}</span>
          </p>
        </div>
      ))}
    </Carousel>
  );
}
