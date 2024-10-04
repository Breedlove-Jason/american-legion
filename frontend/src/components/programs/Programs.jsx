import React from "react";
import {
  SectionContainer,
  SectionImage,
  SectionContent,
  SectionTitle,
  TwoColumnSection,
  Column,
  PageTitle,
  BottomText,
} from "./Programs.styles.jsx";

const Programs = () => {
  return (
    <SectionContainer>
      <PageTitle>American Legion Post 84 Programs</PageTitle>
      {/* Veteran Support Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Veteran Support Image"
          />
        </Column>
        <Column>
          <SectionTitle>Veteran Support</SectionTitle>
          <BottomText>
            At Post 84, we offer a range of support services for veterans,
            including assistance with VA benefits, health care resources, and
            our Honor Guard services. We are here to ensure that all veterans
            receive the support and recognition they deserve.
          </BottomText>
        </Column>
      </TwoColumnSection>

      {/* Community Involvement Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Community Event Image"
          />
        </Column>
        <Column>
          <SectionTitle>Community Involvement</SectionTitle>
          <BottomText>
            Post 84 is deeply involved in the Auburn community. We host and
            participate in events like Memorial Day and Veterans Day ceremonies,
            provide scholarships to local students, and support various
            community service projects.
          </BottomText>
        </Column>
      </TwoColumnSection>

      {/* Youth Programs Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Youth Program Image"
          />
        </Column>
        <Column>
          <SectionTitle>Youth Programs</SectionTitle>
          <BottomText>
            Our youth programs, including Boys State and Girls State, aim to
            educate young people about civic responsibility and leadership. We
            also offer scholarships and sponsor youth activities that promote
            the values of the American Legion.
          </BottomText>
        </Column>
      </TwoColumnSection>
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Legion Riders Image"
          />
        </Column>
        <Column>
          <SectionTitle>Legion Riders</SectionTitle>
          <BottomText>
            The Legion Riders are a group of motorcycle enthusiasts who share a
            passion for supporting veterans and their families. Through rides
            and events, they raise funds for veteran causes and provide
            community outreach.
          </BottomText>
        </Column>
      </TwoColumnSection>
    </SectionContainer>
  );
};

export default Programs;
