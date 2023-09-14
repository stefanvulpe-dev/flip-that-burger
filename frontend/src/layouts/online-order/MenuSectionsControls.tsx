import {
  MenuNavBar,
  MenuSection,
  SearchBar,
  SectionSlider,
} from '../../components';
import { menuItems } from '../../data/MenuItems';
import { MenuSectionReducer } from '../../utils';
import { useReducer } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

export function MenuSectionsControls() {
  const [state, dispatch] = useReducer(MenuSectionReducer, {
    element: (
      <MenuSection title='Top sellers' logo={faTrophy} items={menuItems} />
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
