import { ReactNode } from 'react';

export function FooterSection({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <section className='text-neutral-200 mt-6'>
      <h2 className='text-xl font-bold text-accent-400 mb-2'>{title}</h2>
      {content}
    </section>
  );
}
