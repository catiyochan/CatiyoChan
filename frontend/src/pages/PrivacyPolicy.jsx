import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy - CatiyoChan
        </h1>

        <p className="mb-4">
          Welcome to <strong>CatiyoChan</strong> (accessible at{" "}
          <a
            href="https://www.catiyochan.fun"
            className="text-blue-400 underline"
          >
            https://www.catiyochan.fun
          </a>
          ). Your privacy is very important to us. This page explains what
          information we collect, how we use it, and how your data is protected
          while using our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          We may collect limited non-personal information such as your browser
          type, IP address, and general location for analytics and ad-serving
          purposes. This helps us improve our website experience and show
          relevant content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Third-Party Advertising
        </h2>
        <p className="mb-4">
          CatiyoChan displays advertisements from third-party networks such as{" "}
          <strong>Adsterra</strong>. These companies may use cookies or similar
          technologies to serve personalized ads based on your browsing
          activity. We do not control or store data collected by these ad
          networks.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies</h2>
        <p className="mb-4">
          Cookies are small files stored on your device that enhance browsing
          experience. You can disable cookies through your browser settings, but
          some features of our site may not function properly as a result.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          External Links and Content
        </h2>
        <p className="mb-4">
          Our website may include links to third-party websites (such as game
          download sources, emulator tools, or guides). We are not responsible
          for the privacy policies or practices of these external sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Children’s Privacy</h2>
        <p className="mb-4">
          CatiyoChan is not directed toward children under 13. We do not
          knowingly collect personal information from minors.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Your Consent</h2>
        <p className="mb-4">
          By using our website, you agree to this Privacy Policy and our use of
          cookies, analytics, and advertisements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p className="mb-4">
          For questions or concerns regarding this Privacy Policy, contact us at{" "}
          <a
            href="mailto:catiyochan@gmail.com"
            className="text-blue-400 underline"
          >
            catiyochan@gmail.com
          </a>
          .
        </p>

        <p className="text-sm mt-10 text-center text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
