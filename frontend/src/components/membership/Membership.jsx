import {
  SectionContainer,
  SectionImage,
  SectionTitle,
  TwoColumnSection,
  Column,
  BottomText,
} from "./Membership.styles.jsx";
import RegisterForm from "@/components/forms/register/RegisterForm.jsx";

const Membership = () => {
  return (
    <div>
      {/* Join Us Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Membership Drive Image"
          />
        </Column>
        <Column>
          <SectionTitle>Join Us</SectionTitle>
          <BottomText>
            Become a member of American Legion Post 84 and join a community
            dedicated to serving veterans and upholding American values. Learn
            about the requirements for membership and the benefits of joining
            our post.
          </BottomText>
        </Column>
      </TwoColumnSection>

      {/* RegisterForm Form Section */}
      <SectionContainer>
        <SectionTitle>Register Now</SectionTitle>
        <RegisterForm />
      </SectionContainer>

      {/* Benefits of Membership Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x600.png"
            alt="Membership Benefits Image"
          />
        </Column>
        <Column>
          <SectionTitle>Benefits of Membership</SectionTitle>
          <BottomText>
            As a member of Post 84, you&apos;ll have access to a variety of
            benefits, including participation in exclusive events, support
            services, and the opportunity to connect with fellow veterans.
          </BottomText>
        </Column>
      </TwoColumnSection>

      {/* Membership Renewal Section */}
      <TwoColumnSection>
        <Column>
          <SectionImage
            src="https://placehold.jp/800x400.png"
            alt="Renewal Image"
          />
        </Column>
        <Column>
          <SectionTitle>Membership Renewal</SectionTitle>
          <BottomText>
            Already a member? Login with your username and password to keep your
            membership current and continue enjoying all the benefits American
            Legion Post 84 has to offer. Renew your membership easily online or
            in person.
          </BottomText>
        </Column>
      </TwoColumnSection>
    </div>
  );
};

export default Membership;
