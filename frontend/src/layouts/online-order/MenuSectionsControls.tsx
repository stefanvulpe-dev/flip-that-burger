import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '@uidotdev/usehooks';
import { useReducer } from 'react';
import {
  MenuNavBar,
  MenuSection,
  SearchBar,
  SectionSlider,
} from '../../components';
import {
  beverages,
  chickenItems,
  coffees,
  menuItems,
  pizzas,
} from '../../data';
import { MenuSectionReducer } from '../../utils';

export function MenuSectionsControls() {
  const [state, dispatch] = useReducer(MenuSectionReducer, {
    element: (
      <MenuSection
        title='Top sellers'
        logo={faTrophy}
        items={menuItems
          .filter(item => item.topSeller)
          .concat(pizzas.filter(item => item.topSeller))
          .concat(chickenItems.filter(item => item.topSeller))
          .concat(beverages.filter(item => item.topSeller))
          .concat(coffees.filter(item => item.topSeller))}
      />
    ),
    activeSection: 'Top sellers',
  });

  const size = useWindowSize();

  function changeActiveSection(section: string) {
    dispatch({ type: section });
  }

  return (
    <>
      <SearchBar />
      {size.width && size.width < 768 ? (
        <SectionSlider
          activeSection={state.activeSection}
          onLinkClick={changeActiveSection}
        />
      ) : (
        <MenuNavBar
          activeSection={state.activeSection}
          onLinkClick={changeActiveSection}
        />
      )}

      {state.element}
    </>
  );
}
