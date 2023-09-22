import { useEffect } from 'react';
import burgerImage from '../assets/about/fat-burger.jpg';
import {
  PresentationSection,
  ReviewsCarousel,
  ReviewsSection,
} from '../components';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PresentationSection
        title={`The World's Best Burger in 2023`}
        subtitle='About us'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, earum. Quam cumque molestias placeat ipsa dolor facilis, incidunt dicta fuga voluptatibus magnam dolorem? Perferendis incidunt quam aliquid eos consequatur voluptas quis excepturi veniam, in cumque, labore at fuga? Optio voluptatem in ratione ipsum nobis inventore dolorum facere eum laboriosam explicabo?'
        link='online-order'
        linkText='Order now'
        image={burgerImage}
      />
      <ReviewsSection>
        <ReviewsCarousel />
      </ReviewsSection>
    </>
  );
}
