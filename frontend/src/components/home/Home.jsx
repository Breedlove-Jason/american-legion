import { Container, Row, Col } from "react-bootstrap";
import {
  SectionTitle,
  ContentContainer,
  StyledImage,
  BottomText,
  PageTitle,
  StyledLink,
} from "./Home.styles.jsx";
import HeroVideo from "@/hero-video/HeroVideo.jsx";

const Home = () => {
  return (
      <>
        <HeroVideo />
        <Container>
          <ContentContainer>
            <PageTitle>Welcome to American Legion Post 84</PageTitle>
            <p>
              Welcome to American Legion Post 84, where we honor those who have
              served our nation. Join us in our mission to support veterans,
              uphold patriotism, and foster a sense of community in Auburn,
              California. Discover how you can get involved and make a difference
              today. American Legion Post 84 is committed to serving veterans,
              their families, and our community. We invite you to explore our
              website and learn more about our mission, events, and how you can
              get involved.
            </p>
          </ContentContainer>

          <Row className="mt-4">
            <Col md={6}>
              <StyledImage
                  src="https://legion-post84-assets.s3.us-west-1.amazonaws.com/images/post84.jpg"
                  alt="Post 84 Building"
              />
            </Col>
            <Col md={6}>
              <ContentContainer>
                <SectionTitle>Meetings</SectionTitle>
                <BottomText>
                  Post 84 meets on the the 2nd Wednesday of each month, unless
                  otherwise posted. It is held at the Auburn Veterans Memorial
                  Building, 100 East St., Auburn, CA. We start the night off with
                  a social hour beginning 5 PM, which is generally followed by a
                  $5 dinner at around 6 PM. Following dinner we have our business
                  meeting with a monthly speaker. Please call the Post at
                  530-889-8574 for more information.
                </BottomText>
              </ContentContainer>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={4}>
              <StyledImage
                  src="https://placehold.jp/800x400.png"
                  alt="Upcoming Events"
              />
              <ContentContainer>
                <SectionTitle>
                  <StyledLink href="/events">Upcoming Events</StyledLink>
                </SectionTitle>
                <BottomText>
                  Join us at our upcoming events! Whether it&apos;s Memorial Day,
                  a community BBQ, or a veterans&apos; support meeting,
                  there&apos;s always something happening at Post 84.
                </BottomText>
              </ContentContainer>
            </Col>
            <Col md={4}>
              <StyledImage
                  src="https://placehold.jp/800x400.png"
                  alt="Latest News"
              />
              <ContentContainer>
                <SectionTitle>Latest News</SectionTitle>
                <BottomText>
                  Stay updated with the latest news from American Legion Post 84.
                  From event recaps to important announcements, find out what’s
                  new.
                </BottomText>
              </ContentContainer>
            </Col>
            <Col md={4}>
              <StyledImage
                  src="https://placehold.jp/800x400.png"
                  alt="Get Involved"
              />
              <ContentContainer>
                <SectionTitle>Get Involved</SectionTitle>
                <BottomText>
                  Looking to give back to your community? Learn how you can get
                  involved with Post 84 through volunteer opportunities,
                  donations, or becoming a member.
                </BottomText>
              </ContentContainer>
            </Col>
          </Row>
        </Container>
      </>
  );
};

export default Home;