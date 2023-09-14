import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '@uidotdev/usehooks';
import Carousel, { ControlProps } from 'nuka-carousel';
import { NavButton } from './NavButton';

export function SectionSlider({
  activeSection,
  onLinkClick,
}: {
  activeSection: string;
  onLinkClick: (section: string) => void;
}) {
  const size = useWindowSize();

  return (
    <Carousel
      renderCenterLeftControls={() => {
        return <div className='hidden'></div>;
      }}
      renderCenterRightControls={(props: ControlProps) => {
        return (
          <div onClick={props.nextSlide}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        );
      }}
      renderBottomCenterControls={() => {
        return <div className='hidden'></div>;
      }}
      slidesToShow={size.width! < 500 ? 2 : 3}
      className='my-4 max-w-xs xs:max-w-sm sm:max-w-lg'>
      <NavButton
        label='Top sellers'
        activeSection={activeSection}
        onClick={() => onLinkClick('Top sellers')}
      />
      <NavButton
        label='Burgers'
        activeSection={activeSection}
        onClick={() => onLinkClick('Burgers')}
      />
      <NavButton
        label='Pizzas'
        activeSection={activeSection}
        onClick={() => onLinkClick('Pizzas')}
      />
      <NavButton
        label='Chicken'
        activeSection={activeSection}
        onClick={() => onLinkClick('Chicken')}
      />
      <NavButton
        label='Beverages'
        activeSection={activeSection}
        onClick={() => onLinkClick('Beverages')}
      />
      <NavButton
        label='Coffee'
        activeSection={activeSection}
        onClick={() => onLinkClick('Coffee')}
      />
    </Carousel>
  );
}
