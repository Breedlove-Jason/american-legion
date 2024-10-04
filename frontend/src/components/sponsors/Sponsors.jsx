import {
  SectionImage,
  SectionTitle,
  TwoColumnSection,
  Column,
  BottomText,
} from "./Sponsors.styles.jsx";
import ImageGallerySlider from "@/components/image-gallery-slider/ImageGallerySlider.jsx";
import SponsorForm from "@/components/forms/sponsor/SponsorForm.jsx";

const Sponsors = () => {
  const sponsorImages = [
    {
      url: "https://placehold.jp/800x600.png",
      text: "Sponsor #1: Sponsor Website",
    },
    {
      url: "https://placehold.jp/800x600.png",
      text: "Sponsor #2: Sponsor Website",
    },
    {
      url: "https://placehold.jp/800x600.png",
      text: "Sponsor #3: Sponsor Website",
    },
  ];
  return (
    <div>
      {/* Our Sponsors Section */}
      <TwoColumnSection>
        <Column>{<ImageGallerySlider images={sponsorImages} />}</Column>
        <Column>
          <SectionTitle>Our Sponsors</SectionTitle>
          <BottomText>
            We are grateful for the support of our sponsors. Their contributions
            help us continue our mission to support veterans and the Auburn
            community. Learn more about our sponsors and how they help Post 84.
          </BottomText>
        </Column>
      </TwoColumnSection>
      {/* Become a Sponsor Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x400.png"
            alt="Sponsorship Image"
          />
        </Column>
        <Column>
          <SectionTitle>Become a Sponsor</SectionTitle>
          <BottomText>
            Interested in becoming a sponsor? Discover the benefits of
            supporting Post 84 and how your contribution can make a difference.
            Fill out the form below today and secure advertising on our Sponsor
            page!
          </BottomText>
        </Column>
      </TwoColumnSection>
      <SponsorForm />
    </div>
  );
};

export default Sponsors;
