import { ReactNode } from 'react';

export function ProfileSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className='text-neutral-300 text-2xl font-bold text-center'>
        {title}
      </h2>
      {children}
    </section>
  );
}
