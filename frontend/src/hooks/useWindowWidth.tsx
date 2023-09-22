import { useWindowSize } from '@uidotdev/usehooks';

export function useWindowWidth() {
  const size = useWindowSize();

  if (size.width !== null) {
    if (size.width < 768) {
      return 1;
    } else if (size.width > 768 && size.width < 1024) {
      return 2;
    } else if (size.width > 1024) {
      return 3;
    }
  }

  return 1;
}
