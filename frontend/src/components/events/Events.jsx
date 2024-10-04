import {
  SectionImage,
  SectionTitle,
  TwoColumnSection,
  Column,
  BottomText,
} from "./Events.styles.jsx";
import EventsCalendar from "@/components/events/EventsCalendar.jsx";
import ImageGallerySlider from "@/components/image-gallery-slider/ImageGallerySlider.jsx";

const Events = () => {
  const pastEventImages = [
    {
      url: "https://placehold.jp/800x600.png",
      text: "Event 1: Description of the event.",
    },
    {
      url: "https://placehold.jp/800x600.png",
      text: "Event 2: Description of the event.",
    },
    {
      url: "https://placehold.jp/800x600.png",
      text: "Event 3: Description of the event.",
    },
  ];

  return (
    <div>
      {/* Calendar Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Calendar Image"
          />
        </Column>
        <Column>
          <SectionTitle>Calendar</SectionTitle>
          <BottomText>
            Check out our calendar to stay informed about upcoming events at
            Post 84. Whether it&apos;s a community gathering or a veterans&apos;
            meeting, you&apos;ll find all the details here.
          </BottomText>
        </Column>
      </TwoColumnSection>
      <EventsCalendar />

      {/* Past Events Section */}
      <TwoColumnSection>
        <Column>
          <ImageGallerySlider images={pastEventImages} />
        </Column>
        <Column>
          <SectionTitle>Past Events</SectionTitle>
          <BottomText>
            Missed an event? No problem! Browse through our past events to see
            what we&apos;ve been up to. From photos to summaries, get a glimpse
            of our recent activities.
          </BottomText>
        </Column>
      </TwoColumnSection>
    </div>
  );
};

export default Events;
