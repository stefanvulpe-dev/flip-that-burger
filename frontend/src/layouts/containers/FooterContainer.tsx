import { FooterSection, SocialLinks } from '../../components';
import footerLogo from '../../assets/icon-chef.png';

export function FooterContainer() {
  return (
    <div className='w-11/12 max-w-6xl mx-auto py-6'>
      <img
        src={footerLogo}
        alt='icon-chef'
        className='max-w-[6rem] mx-auto border-4 border-accent-200 rounded-full p-4'
      />
      <div className='max-w-4xl mx-auto my-6 text-center md:grid grid-cols-fill-3 gap-4'>
        <FooterSection
          title='Address'
          content={
            <address className='max-w-[15ch] mx-auto'>
              747 Marconi Ave. Bronx, NY 10453
            </address>
          }
        />
        <FooterSection
          title='Book a table'
          content={
            <p className='max-w-[30ch] mx-auto'>
              Use this phone number to make a reservation today!
              <a
                className='block w-max mx-auto text-accent-100 font-semibold border-b-2 border-neutral-300 hover:border-accent-100'
                href='tel:123-456-7890'>
                +880 196 7979 119
              </a>
            </p>
          }
        />
        <FooterSection
          title='Opening hours'
          content={
            <time>
              <p>Monday - Friday</p>
              <p>8:00 AM - 9:00 PM</p>
            </time>
          }
        />
      </div>
      <SocialLinks />
      <p className='text-neutral-200 text-center mt-6'>
        &copy; 2023 All rights reserved
      </p>
    </div>
  );
}
