import GoBack from "@/components/general/GoBack";
import Markdown from "react-markdown";

export default async function PrivacyPolicy() {
    const privacyPolicy = `# Privacy Policy

**Last updated:** April 23, 2026

## Introduction

This Privacy Policy explains how information may be handled when you use our website.

## Information We Collect

We do not directly request or collect personal information such as your name, email address, or account details through this website.

However, certain technical information may be processed automatically by third-party services integrated into the website, such as advertising providers. This may include limited data such as browser type, device information, language settings, approximate location, IP address, and similar technical identifiers required for ad delivery, fraud prevention, security, analytics, or service functionality.

## Advertising

Our website displays advertisements provided by third-party advertising partners, including Adsterra. These advertising partners may use their own technologies, such as cookies, scripts, pixels, or similar tracking mechanisms, to deliver, measure, personalize, or protect advertising content.

We do not control the technologies, data practices, or retention policies of third-party advertisers. Any data processed by such partners is governed by their own privacy and cookie policies.

## Cookies and Similar Technologies

We do not intentionally use cookies for our own analytics or account system.

However, third-party advertising services shown on the website may place or access cookies and similar technologies on your device in order to operate ads, measure performance, prevent abuse, and improve service quality.

If you wish, you can manage or disable cookies through your browser settings. Please note that some advertising-related features may not function properly if cookies are blocked.

## Third-Party Services

This website may rely on third-party services, including advertising networks, embedded media providers, and external content sources. These services may automatically receive certain technical information when pages are loaded in your browser.

We are not responsible for the privacy practices of third-party services. We encourage users to review the policies of those providers separately.

## Children's Privacy

This website is not intended to knowingly collect personal information from children.

## Data Security

We take reasonable steps to keep the website secure. However, no method of transmission or online storage can be guaranteed to be completely secure.

## Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.

## Contact

If you have any questions regarding this Privacy Policy, you may contact us through the website's available contact method.`;

    return (
        <div className="w-full h-auto flex flex-col items-center p-4">
            <div className="lg:w-2/3 w-full h-auto flex flex-col items-start pt-16 gap-3">
                <GoBack />
                <div className="prose lg:prose-xl prose-invert w-full h-auto">
                    <Markdown>{privacyPolicy}</Markdown>
                </div>
            </div>
        </div>
    )
}
