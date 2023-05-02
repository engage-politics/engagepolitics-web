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

const TermsOfServicePage = () => {
  return (
    <Container>
      <Column>
        <PolicyHeading>Terms of Services</PolicyHeading>
        <Section>
          Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of
          Service &quot;) and our Privacy Policy (located at {' '}
          <a href="/privacy-policy">www.engagepolitics.com/privacy-policy</a>) carefully before using the
          http://www.engagepolitics.com website (the &quot;Service&quot;) operated by
          Engage Labs PBC DBA Engage (&quot;us&quot;, &quot;we&quot;, or
          &quot;our&quot;) because they govern the use of our website and
          Service. Use of the website does not entitle you to use Engage’s
          services; usage of those services is subject to acceptance of you as a
          client by the applicable Engage entity and will be governed by a
          separate agreement between you and the applicable Engage entity.
        </Section>
        <Section>
          <Paragraph>
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms
            of Service &quot;) and our Privacy Policy (located at {' '}
            <a href="/privacy-policy">www.engagepolitics.com/privacy-policy</a>)
            carefully before using the {' '}
            <a href="/privacy-policy">www.engagepolitics.com</a> website (the
            &quot;Service&quot;) operated by Engage Labs PBC DBA Engage
            (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) because they
            govern the use of our website and Service. Use of the website does
            not entitle you to use Engage’s services; usage of those services is
            subject to acceptance of you as a client by the applicable Engage
            entity and will be governed by a separate agreement between you and
            the applicable Engage entity.
          </Paragraph>
          <Paragraph>
            Your access to and use of the Service is conditioned upon your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who wish to access or use the
            Service.
          </Paragraph>
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you do not have
          permission to access the Service.
        </Section>
        <Section>
          <SectionTitle>Who May Use The Service</SectionTitle>
          You may use the Service only if you are 18 years or older and capable
          of forming a binding contract with us and are not barred from using
          the Service under applicable law.
        </Section>
        <Section>
          <SectionTitle>Accounts</SectionTitle>
          <Paragraph>
            When you create an account with us, you guarantee that you are above
            the age of 18, and that the information you provide us is accurate,
            complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on the Service.
          </Paragraph>
          You are responsible for maintaining the confidentiality of your
          account and password, including but not limited to the restriction of
          access to your computer and/or account. You agree to accept
          responsibility for any and all activities or actions that occur under
          your account and/or password, whether your password is with our
          Service or a third-party service. You must notify us immediately upon
          becoming aware of any breach of security or unauthorized use of your
          account.
        </Section>
        <Section>
          <SectionTitle>Copyright Policy</SectionTitle>
          <Paragraph>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that content posted on the Service
            infringes on the copyright or other intellectual property rights
            (&quot;Infringement&quot;) of any person or entity.
          </Paragraph>
          <Paragraph>
            If you are a copyright owner, or authorized on behalf of one, and
            you believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement, please submit your claim via
            email to dmca@engage.com, with the subject line: &quot;Copyright
            Infringement&quot; and include in your claim a detailed description
            of the alleged Infringement as detailed below, under &quot;DMCA
            Notice and Procedure for Copyright Infringement Claims&quot;.
          </Paragraph>
          You may be held accountable for damages (including costs and
          attorneys&apos; fees) for misrepresentation or bad-faith claims on the
          infringement of any content found on and/or through the Service on
          your copyright.
        </Section>
        <Section>
          <SectionTitle>
            DMCA Notice and Procedure for Copyright Infringement Claims
          </SectionTitle>
          You may submit a notification pursuant to the Digital Millennium
          Copyright Act (DMCA) by providing our Copyright Agent with the
          following information in writing (see 17 U.S.C 512(c)(3) for further
          detail):
          <Paragraph className="mt-10">
            - an electronic or physical signature of the person authorized to
            act on behalf of the owner of the copyright&apos;s interest;
          </Paragraph>
          <Paragraph>
            - a description of the copyrighted work that you claim has been
            infringed, including the URL (i.e., web page address) of the
            location where the copyrighted work exists or a copy of the
            copyrighted work;
          </Paragraph>
          <Paragraph>
            - identification of the URL or other specific location on the
            Service where the material that you claim is infringing is located;
          </Paragraph>
          <Paragraph>
            - your address, telephone number, and email address;
          </Paragraph>
          <Paragraph>
            - a statement by you that you have a good faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law;
          </Paragraph>
          <Paragraph>
            - a statement by you, made under penalty of perjury, that the above
            information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner&apos;s
            behalf.
          </Paragraph>
          <Paragraph>
            - You can contact our Copyright Agent via email at dmca@engage.com
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Intellectual Property</SectionTitle>
          The Service and its original content, features and functionality are
          and will remain the exclusive property of us, our affiliates and our
          and their licensors. The Service is protected by copyright, trademark,
          and other laws of both the United States and foreign countries. Our
          trademarks and trade dress may not be used in connection with any
          product or service without our prior written consent.
        </Section>
        <Section>
          <SectionTitle>Links To Other Web Sites</SectionTitle>
          <Paragraph>
            Our Service may contain links to third party web sites or services
            that are not owned or controlled by us or our affiliates.
          </Paragraph>
          <Paragraph>
            Neither we nor our affiliates have any control over, and neither we
            nor they assume any responsibility for the content, privacy
            policies, or practices of any third party web sites or services. We
            do not warrant the offerings of any of these entities/individuals or
            their websites.
          </Paragraph>
          <Paragraph>
            You acknowledge and agree that neither we nor our affiliates shall
            be responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with use of
            or reliance on any such content, goods or services available on or
            through any such third party web sites or services.
          </Paragraph>
          We strongly advise you to read the terms of service and privacy
          policies of any third party web sites or services that you visit.
        </Section>
        <Section>
          <SectionTitle>Termination</SectionTitle>
          <Paragraph>
            We may terminate or suspend your account and bar access to the
            Service immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of these Terms.
          </Paragraph>
          If you wish to terminate your account, you may simply discontinue
          using the Service. All provisions of these Terms which by their nature
          should survive termination shall survive termination, including,
          without limitation, ownership provisions, warranty disclaimers,
          indemnity and limitations of liability.
        </Section>
        <Section>
          <SectionTitle>Indemnification</SectionTitle>
          You agree to defend, indemnify and hold harmless us, our affiliates,
          and our and their licensees and licensors, and our and their
          employees, contractors, agents, officers and directors, from and
          against any and all claims, damages, obligations, losses, liabilities,
          costs or debt, and expenses (including but not limited to
          attorney&apos;s fees), resulting from or arising out of a) your use
          and access of the Service, by you or any person using your account and
          password, or b) a breach of these Terms.
        </Section>
        <Section>
          <SectionTitle>Limitation Of Liability</SectionTitle>
          In no event shall we or our affiliates, or our or their directors,
          employees, partners, agents, suppliers, or affiliates, be liable for
          any indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your access to or use of
          or inability to access or use the Service; (ii) any conduct or content
          of any third party on the Service; (iii) any content obtained from the
          Service; and (iv) unauthorized access, use or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          (including negligence) or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </Section>
        <Section>
          <SectionTitle>Disclaimer</SectionTitle>
          <Paragraph>
            Your use of the Service is at your sole risk. The Service and its
            contents are provided on an &quot;AS IS&quot; and &quot;AS
            AVAILABLE&quot; basis. The Service is provided without warranties of
            any kind, whether express or implied, including, but not limited to,
            implied warranties of merchantability, fitness for a particular
            purpose, non-infringement or course of performance.
          </Paragraph>
          Neither we nor our affiliates, nor our or their licensors warrant that
          a) the Service will function uninterrupted, secure or available at any
          particular time or location; b) any errors or defects will be
          corrected; c) the Service will be free of viruses or other harmful
          components; or d) the results of using the Service will meet your
          requirements.
        </Section>
        <Section>
          <SectionTitle>Exclusions</SectionTitle>
          Some jurisdictions do not allow the exclusion of certain warranties or
          the exclusion or limitation of liability for consequential or
          incidental damages, so the limitations above may not apply to you.
        </Section>
        <Section>
          <SectionTitle>Governing Law</SectionTitle>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have had between
          us regarding the Service.
        </Section>
        <Section>
          <SectionTitle>Changes</SectionTitle>
          <Paragraph>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will provide
            at least 15 days notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole
            discretion.
          </Paragraph>
          By continuing to access or use our Service after any revisions become
          effective, you agree to be bound by the revised terms. If you do not
          agree to the new terms, you are no longer authorized to use the
          Service.
        </Section>
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          If you have any questions about these Terms, please contact us: By
          email: support@engage.com
        </Section>
      </Column>
    </Container>
  );
};

export default TermsOfServicePage;
