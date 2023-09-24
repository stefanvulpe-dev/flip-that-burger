export function ProfileTitle({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <h1 className='text-neutral-300 font-bold text-2xl text-center pt-10 lg:pt-0 lg:col-start-2 lg:col-end-3'>
      Hello, {firstName} {lastName}!
    </h1>
  );
}
