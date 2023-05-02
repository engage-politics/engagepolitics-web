import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import Container from '../../layout/Container';

const Column = tw.div`
  max-w-3xl
  mx-auto
  mt-0
  sm:mt-4
  px-0
  md:px-6
  lg:px-0
`;

const PolicyHeading = tw.h1`
  text-3xl
  xsm:text-4xl
  md:text-5.25xl
  leading-9
  md:leading-14
  font-bold
  mb-6
`;

const Section = styled.div`
  margin-bottom: 3rem;

  a {
    color: #2c87f0 !important;
  }
  a:visited {
    color: #636 !important;
  }
  a:hover,
  a:active,
  a:focus {
    color: #c33 !important;
  }
`;

const Paragraph = tw.div`
  mb-3
`;

const SectionTitle = tw.h3`
  font-bold
  mb-2
`;

const CookiesPolicyPage = () => {
  return (
    <Container>
      <Column>
        <PolicyHeading>Cookies Policy</PolicyHeading>
        <Section>
          <Paragraph>
            Engage Labs PBC DBA Engage (&quot;us&quot;, &quot;we&quot;, or
            &quot;our&quot;) uses cookies on the <a href="https://www.engagepolitics.com">http://www.engagepolitics.com</a> website
            (the &quot;Service&quot;). By using the Service, you consent to the
            use of cookies.
          </Paragraph>
          Our Cookies Policy explains what cookies are, how we use cookies, how
          third-parties we may partner with may use cookies on the Service, your
          choices regarding cookies and further information about cookies.
        </Section>
        <Section>
          <SectionTitle>What are cookies</SectionTitle>
          <Paragraph>
            Cookies are small pieces of text sent to your web browser by a
            website you visit. A cookie file is stored in your web browser and
            allows the Service or a third-party to recognize you and make your
            next visit easier and the Service more useful to you.
          </Paragraph>{' '}
          Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
          Persistent cookies remain on your personal computer or mobile device
          when you go offline, while session cookies are deleted as soon as you
          close your web browser.
        </Section>
        <Section>
          <SectionTitle>
            How Engage Labs PBC DBA Engage uses cookies
          </SectionTitle>{' '}
          When you use and access the Service, we may place a number of cookies
          files in your web browser.{' '}
        </Section>
        <Section>
          <SectionTitle>
            We use cookies for the following purposes:{' '}
          </SectionTitle>
          <Paragraph>- To enable certain functions of the Service </Paragraph>
          <Paragraph>- To provide analytics </Paragraph>
          <Paragraph>- To store your preferences</Paragraph>
        </Section>{' '}
        <Section>
          <SectionTitle>
            We use both session and persistent cookies on the Service and we use
            different types of cookies to run the Service:
          </SectionTitle>{' '}
          <Paragraph>
            - Essential cookies. We may use cookies to remember information that
            changes the way the Service behaves or looks, such as a user&apos;s
            language preference on the Service.
          </Paragraph>
          <Paragraph>
            {' '}
            - Accounts-related cookies. We may use accounts-related cookies to
            authenticate users and prevent fraudulent use of user accounts. We
            may use these cookies to remember information that changes the way
            the Service behaves or looks, such as the &quot;remember me&quot;
            functionality.{' '}
          </Paragraph>
          <Paragraph>
            - Analytics cookies. We may use analytics cookies to track
            information on how the Service is used so that we can make
            improvements. We may also use analytics cookies to test new
            advertisements, pages, features or new functionality of the Service
            to see how our users react to them.{' '}
          </Paragraph>
          <Paragraph>- Third-party cookies </Paragraph>
          <Paragraph>
            - In addition to our own cookies, we may also use various
            third-parties cookies to report usage statistics of the Service,
            deliver advertisements on and through the Service, and so on.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>What are your choices regarding cookies </SectionTitle>
          <Paragraph>
            If you&apos;d like to delete cookies or instruct your web browser to
            delete or refuse cookies, please visit the help pages of your web
            browser.{' '}
          </Paragraph>
          <Paragraph>
            Please note, however, that if you delete cookies or refuse to accept
            them, you might not be able to use all of the features we offer, you
            may not be able to store your preferences, and some of our pages
            might not display properly.{' '}
          </Paragraph>
          <Paragraph>
            For the Chrome web browser, please visit this page from Google:
            https://support.google.com/accounts/answer/32050{' '}
          </Paragraph>
          <Paragraph>
            For the Internet Explorer web browser, please visit this page from
            Microsoft: http://support.microsoft.com/kb/278835{' '}
          </Paragraph>
          <Paragraph>
            For the Firefox web browser, please visit this page from Mozilla:
            https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
          </Paragraph>
          <Paragraph>
            For the Safari web browser, please visit this page from Apple:
            https://support.apple.com/kb/PH21411?locale=en_US{' '}
          </Paragraph>
          <Paragraph>
            For any other web browser, please visit your web browser&apos;s
            official web pages.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Revisions to this Cookie Policy</SectionTitle> We may
          update or revise this Cookie Policy to reflect changes in our Service.
          We will revise the Cookie Policy to include a “Last Updated” date at
          the top of this Cookie Policy to indicate when the Cookie Policy has
          materially changed. If we make any material changes in the way we
          collect, use and/or share information held in cookies, we will notify
          you by prominently posting notice of the changes on our website. We
          recommend that you check this page from time to time to inform
          yourself of any changes to this Cookie Policy.
        </Section>
        <Section>
          <SectionTitle>
            Where can you find more information about cookies
          </SectionTitle>
          <Paragraph className="pb-8">
            You can learn more about cookies and the following third-party
            websites:
          </Paragraph>
          <Paragraph>
            AllAboutCookies: http://www.allaboutcookies.org/
          </Paragraph>
          <Paragraph>
            Network Advertising Initiative: http://www.networkadvertising.org/
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Contact Us </SectionTitle>
          <Paragraph>
            If you have any questions about our Cookies Policy, please contact
            us:
          </Paragraph>
          <Paragraph> By email: support@engage.com</Paragraph>
        </Section>
      </Column>
    </Container>
  );
};

export default CookiesPolicyPage;
