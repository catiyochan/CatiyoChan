import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions - CatiyoChan
        </h1>

        <p className="mb-4">
          Welcome to <strong>CatiyoChan.fun</strong>. By using this website, you
          agree to follow and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Content</h2>
        <p className="mb-4">
          The content on this website, including text, images, and gaming
          resources, is provided for informational and entertainment purposes
          only. We do not host copyrighted ROMs or game files. All links or
          downloads provided are publicly available or belong to their
          respective owners.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          CatiyoChan is not responsible for any damage or loss caused by using
          files, links, or content shared on this website. Users are responsible
          for verifying the legality of downloads in their region.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Advertisements</h2>
        <p className="mb-4">
          We display ads through third-party networks (like Adsterra). Clicking
          on these ads is voluntary. We are not responsible for the content or
          actions of third-party advertisers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Changes</h2>
        <p className="mb-4">
          We may modify these terms at any time without notice. Continued use of
          the website means you accept the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
        <p className="mb-4">
          If you have any questions regarding these Terms, please contact us at{" "}
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

export default TermsAndConditions;
