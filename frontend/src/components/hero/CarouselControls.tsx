import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from '../../data/MenuItems';

export function CarouselControls({
  onClickNext,
  onClickPrev,
  selectedIndex,
}: {
  onClickNext: () => void;
  onClickPrev: () => void;
  selectedIndex: number;
}) {
  return (
    <div className='w-11/12 max-w-6xl mx-auto pt-4 text-accent-400 font-semibold lg:text-lg'>
      <button type='button' onClick={onClickPrev}>
        <FontAwesomeIcon icon={faAngleLeft} className='text-accent-200 pr-2' />
      </button>
      <span className='tracking-widest'>
        <span className='text-accent-200'>0{selectedIndex + 1} / </span> 0
        {menuItems.length}
      </span>
      <button type='button' onClick={onClickNext}>
        <FontAwesomeIcon icon={faAngleRight} className='text-accent-200 pl-2' />
      </button>
    </div>
  );
}
