import {
  SectionContainer,
  SectionImage,
  SectionTitle,
  LeadershipCard,
  LeadershipCardImage,
  LeadershipCardContent,
  LeadershipCardsContainer,
  Column,
  TwoColumnSection,
  PageTitle,
  BottomText,
  ContentWrapper,
} from "./About.styles.jsx";

const AboutUs = () => {
  return (
    <div>
      <PageTitle>About American Legion Post 84</PageTitle>
      {/* Our History Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Historic Photo"
          />
        </Column>
        <Column>
          <ContentWrapper>
            <SectionTitle>Our History</SectionTitle>
            <BottomText>
              American Legion Post 84 was founded shortly after World War I by a
              group of dedicated veterans in Auburn, California. Over the years,
              the post has grown and evolved, becoming a vital part of the local
              community. From our early days supporting returning soldiers to
              our current programs that assist veterans of all ages, Post 84 has
              remained true to its mission.
            </BottomText>
          </ContentWrapper>
        </Column>
      </TwoColumnSection>

      {/* Our Mission Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x400.png"
            alt="Mission Statement Image"
          />
        </Column>
        <Column>
          <SectionTitle>Our Mission</SectionTitle>
          <BottomText>
            The mission of American Legion Post 84 is to support our
            nation&apos;s veterans, uphold American values, and contribute to
            the well-being of our community. We strive to provide assistance to
            veterans, promote patriotism, and foster a spirit of camaraderie
            among our members.
          </BottomText>
        </Column>
      </TwoColumnSection>

      {/* Leadership Section */}
      <SectionContainer>
        <SectionTitle>Leadership</SectionTitle>
        <LeadershipCardsContainer>
          <LeadershipCard>
            <LeadershipCardImage
              src="https://placehold.jp/800x600.png"
              alt="Commander Larry LaVerne"
            />
            <LeadershipCardContent>
              <h3>Larry LaVerne</h3>
              <p>Commander</p>
              <BottomText>
                Larry LaVerne has been serving as the Commander of Post 84 since
                2023. With a deep commitment to veterans and the community,
                Larry ensures that Post 84 remains a beacon of support and
                service.
              </BottomText>
            </LeadershipCardContent>
          </LeadershipCard>
          <LeadershipCard>
            <LeadershipCardImage
              src="https://placehold.jp/800x600.png"
              alt="1st Vice Commander Lorie Fransechi"
            />
            <LeadershipCardContent>
              <h3>Lorie Fransechi</h3>
              <p>1st Vice Commander</p>
              <BottomText>
                Lorie Fransechi, our 1st Vice Commander, plays a crucial role in
                coordinating the activities and events at Post 84, ensuring that
                our programs run smoothly and effectively.
              </BottomText>
            </LeadershipCardContent>
          </LeadershipCard>
          <LeadershipCard>
            <LeadershipCardImage
              src="https://placehold.jp/800x600.png"
              alt="2nd Vice Commander Jim Lambert"
            />
            <LeadershipCardContent>
              <h3>Jim Lambert</h3>
              <p>2nd Vice Commander</p>
              <BottomText>
                Jim Lambert, as the 2nd Vice Commander, supports the Post&apos;s
                mission through his leadership and dedication to the veteran
                community.
              </BottomText>
            </LeadershipCardContent>
          </LeadershipCard>
        </LeadershipCardsContainer>
      </SectionContainer>
    </div>
  );
};

export default AboutUs;
