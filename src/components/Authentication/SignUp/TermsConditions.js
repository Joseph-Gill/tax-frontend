import React from 'react';
import styled from 'styled-components/macro';

const TermsAndConditions = styled.div`
    color: black;
    overflow-y: scroll;
    height: 70vh;
    overflow-y: scroll;
    div {
      margin-top: 10px;
    };
`;

export const TermsConditions = ( { children } ) => {
  return (
    <TermsAndConditions>
      Welcome to Job Tracker!<br/><br/>

      Thanks for using Job Tracker. This app is created and maintained by Propulsion Academy AG, Technoparkstrasse 1,
      CH-8055, Zurich.<br/><br/>

      By using Job Tracker, you are agreeing to the following Terms and Conditions (Terms). Please read them
      carefully.<br/><br/>

      Job Tracker Terms of Use<br/><br/>

      These Terms govern your access to the use of Job Tracker app. They limit Propulsion’s liability and obligations to
      you, impose certain obligations, allow Job Tracker to terminate and suspend your access at any time. Job Tracker network<br/>
      enables users to share third party knowledge with their network, access that knowledge, share small code snippets
      along with it’s other functionalities. Job Tracker is a proprietary software program belonging to
      Propulsion.<br/><br/>

      You agree that by signing up to use Job Tracker and registering as a user, you are entering into a legally binding
      agreement with Propulsion Academy. By agreeing to Terms by clicking “Log In”, “Sign up” and “I agree” or similar
      buttons, you agree that you have read and understood the Terms and that you are bound by them.<br/><br/>

      Propulsion Academy reserves the right, at its sole discretion to change, modify, add or remove portions of these
      Terms any time. We will notify you of such changes and it is your sole responsibility to check these
      updated<br/><br/>
      Terms.

      By agreeing to these Terms, you not only agree to all the points above but also to our privacy policies explained
      below.<br/><br/>

      Right to use Job Tracker

      On the conditions that you comply with all obligations under this agreement, we grant you a limited, revocable,
      nonexclusive, non assignable, non sublicensable right to access Job Tracker in accordance with our Terms of Use.<br/><br/>

      You understand that we use third-party vendors and hosting partners to provide hardware, software, networking,
      storage, and related technology required to run our service.<br/><br/>

      Signup and Registration

      To use Job Tracker, you must complete the sign-up process and register as a user. Your login may only be used by one
      person - a single login shared by multiple people is not permitted.<br/><br/>


      Cancelling your account

      You are solely responsible to cancel your account. To cancel your account, you must write an email to
      learn@propulsionacademy.com. The cancelation email must be sent from the same email address as the one you used to
      access<br/>
      Job Tracker. If you wish us to remove any data stored with your account, you must explicitly declare that in by email
      with “Please remove all data connected with my account”.<br/><br/>

      Restrictions of Use

      You must comply with all available laws, rules, regulations and guidelines, and agree not to do any of the
      following:<br/><br/>

      Access, tamper with, or use non-public areas of Job Tracker or it’s third party hosting provides computer
      systems.<br/>
      Attempt to access or search the Job Tracker with any engine, software, tool, agent, device or mechanism other than
      the software and/or search agents provided by Job Tracker or other generally available third-party web browsers (such<br/>
      as Microsoft Internet Explorer, Mozilla Firefox, or Google Chrome), including but not limited to browser
      automation tools.<br/>
      Attempt to decipher, decompile, disassemble or reverse-engineer any of the software used to provide the
      Job Tracker.<br/>
      Perform any act which is intended to harm Job Tracker.<br/><br/>


      Privacy policy<br/><br/>

      The goal of this privacy policy is to provide you information on what we collect, why we collect, and how you can
      at any time manage, export and delete your information.<br/>
      What data do we collect?<br/>
      Along with your registration details, we collect all information shared on Job Tracker network.<br/>
      <div>
        { children }
      </div>
    </TermsAndConditions>
  );
};
