import { PresentationSection } from '../components';
import burgerImage from '../assets/about/fat-burger.jpg';
import { ReviewsSection } from '../components/about/ReviewsSection';
import { ReviewsCarousel } from '../components/about/ReviewsCarousel';
export function About() {
  return (
    <>
      <PresentationSection
        title={`The World's Best Burger in 2023`}
        subtitle='About us'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, earum. Quam cumque molestias placeat ipsa dolor facilis, incidunt dicta fuga voluptatibus magnam dolorem? Perferendis incidunt quam aliquid eos consequatur voluptas quis excepturi veniam, in cumque, labore at fuga? Optio voluptatem in ratione ipsum nobis inventore dolorum facere eum laboriosam explicabo?'
        link='/order-now'
        linkText='Order now'
        image={burgerImage}
      />
      <ReviewsSection>
        <ReviewsCarousel />
      </ReviewsSection>
    </>
  );
}
