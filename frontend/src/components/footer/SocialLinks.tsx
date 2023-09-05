import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export function SocialLinks() {
  return (
    <ul className='text-accent-400 py-6 max-w-[15rem] mx-auto text-2xl flex justify-between items-center'>
      <li>
        <a
          href='#'
          className='transition-colors hover:bg-accent-400 hover:text-neutral-300 rounded-full border-2 border-accent-400 px-3 py-2'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a
          href='#'
          className='transition-colors hover:bg-accent-400 hover:text-neutral-300 rounded-full border-2 border-accent-400 px-3 py-2'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href='#'
          className='transition-colors hover:bg-accent-400 hover:text-neutral-300 rounded-full border-2 border-accent-400 px-3 py-2'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    </ul>
  );
}
