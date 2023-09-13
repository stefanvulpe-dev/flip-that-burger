import { faTrashCan, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ProfilePictureControls() {
  return (
    <div>
      <button className='block w-full px-6 py-4 bg-accent-200 text-accent-400 rounded-md transition-colors hover:bg-accent-300'>
        <FontAwesomeIcon icon={faUpload} className='pr-2' />
        Change picture
      </button>
      <button className='block w-full mt-4 px-6 py-4 text-accent-200 bg-accent-400 border-2 border-accent-200 rounded-md transition-colors hover:border-accent-300 hover:text-accent-300'>
        <FontAwesomeIcon icon={faTrashCan} className='pr-2' />
        Remove picture
      </button>
    </div>
  );
}
