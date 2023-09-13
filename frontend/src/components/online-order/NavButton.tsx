export function NavButton({
  label,
  activeSection,
  onClick,
}: {
  label: string;
  activeSection: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`block mx-auto md:mx-0 border-b-2 ${
        activeSection === label ? 'border-accent-300' : 'border-transparent'
      }`}
      type='button'
      onClick={onClick}>
      {label}
    </button>
  );
}
