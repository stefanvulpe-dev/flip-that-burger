import { useState } from 'react';
import { menuItems } from '../../data/MenuItems';
import { BurgerArticle } from './BurgerArticle';
import { CarouselControls } from './CarouselControls';

export function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItem = menuItems[selectedIndex];

  return (
    <>
      <BurgerArticle menuItem={menuItem} />
      <CarouselControls
        onClickPrev={() => {
          if (selectedIndex === 0) {
            setSelectedIndex(menuItems.length - 1);
          } else {
            setSelectedIndex(selectedIndex - 1);
          }
        }}
        onClickNext={() => {
          if (selectedIndex === menuItems.length - 1) {
            setSelectedIndex(0);
          } else {
            setSelectedIndex(selectedIndex + 1);
          }
        }}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
