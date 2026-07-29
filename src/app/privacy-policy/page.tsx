import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MiniGameWiki.com — cookies, AdSense, and data practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="space-y-6 text-muted">
      <h1 className="text-3xl font-semibold text-fg">Privacy Policy</h1>
      <p className="text-sm">Last updated: July 29, 2026</p>

      <p>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy. This policy is written in a style
        consistent with common TermsFeed / generator-style privacy documents for
        static informational websites.
      </p>

      <h2 className="text-xl font-semibold text-fg">Interpretation and Definitions</h2>
      <p>
        For the purposes of this Privacy Policy: <strong className="text-fg">Company</strong>{" "}
        (referred to as either &quot;the Company&quot;, &quot;We&quot;,
        &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to
        MiniGameWiki, operating the website MiniGameWiki.com.{" "}
        <strong className="text-fg">Service</strong> refers to the Website.{" "}
        <strong className="text-fg">Website</strong> refers to MiniGameWiki,
        accessible from https://minigamewiki.com.{" "}
        <strong className="text-fg">You</strong> means the individual accessing
        or using the Service.
      </p>

      <h2 className="text-xl font-semibold text-fg">Collecting and Using Your Personal Data</h2>
      <h3 className="text-lg font-medium text-fg">Types of Data Collected</h3>
      <p>
        While using Our Service, We may ask You to provide certain personally
        identifiable information that can be used to contact or identify You,
        such as when You email Us. Separately, hosting and analytics providers
        may automatically collect technical data such as IP address, browser
        type, and pages visited.
      </p>

      <h2 className="text-xl font-semibold text-fg">Cookies and Tracking</h2>
      <p>
        Cookies are small files placed on Your device. We may use cookies and
        similar tracking technologies to improve the Service, remember
        preferences, and understand traffic.
      </p>
      <p>
        Third-party vendors, including Google, may use cookies to serve ads
        based on a user&apos;s prior visits to this website or other websites.
        Google&apos;s use of advertising cookies enables it and its partners to
        serve ads to users based on their visit to this site and/or other sites
        on the Internet. Users may opt out of personalized advertising by
        visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          className="text-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Ads Settings
        </a>
        . If we use Google AdSense or similar advertising networks, cookies may
        be used to personalize ads and measure ad performance; you can manage
        cookie preferences in your browser and via the opt-out links provided by
        those vendors.
      </p>

      <h2 className="text-xl font-semibold text-fg">Use of Your Personal Data</h2>
      <p>
        The Company may use Personal Data to provide and maintain the Service,
        manage Your requests, communicate with You, and for analytics and
        compliance purposes.
      </p>

      <h2 className="text-xl font-semibold text-fg">Children&apos;s Privacy</h2>
      <p>
        Our Service does not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children
        under 13. If You are a parent or guardian and You are aware that Your
        child has provided Us with Personal Data, please contact Us.
      </p>

      <h2 className="text-xl font-semibold text-fg">Links to Other Websites</h2>
      <p>
        Our Service may contain links to other websites that are not operated by
        Us. We strongly advise You to review the Privacy Policy of every site
        You visit.
      </p>

      <h2 className="text-xl font-semibold text-fg">Changes to this Privacy Policy</h2>
      <p>
        We may update Our Privacy Policy from time to time. We will post the new
        Privacy Policy on this page and update the &quot;Last updated&quot;
        date.
      </p>

      <h2 className="text-xl font-semibold text-fg">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, You can contact Us
        by email:{" "}
        <a href="mailto:hello@minigamewiki.com" className="text-accent hover:underline">
          hello@minigamewiki.com
        </a>
        .
      </p>
    </article>
  );
}
