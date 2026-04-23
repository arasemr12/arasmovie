import GoBack from "@/components/general/GoBack";
import Markdown from "react-markdown";

export default async function PrivacyPolicy() {
    const privacyPolicy = `# Terms of Service

**Last updated:** April 23, 2026

## Acceptance of Terms

By accessing or using this website, you agree to be bound by these Terms of Service.

## Use of the Website

You agree to use this website only for lawful purposes and in a manner that does not violate applicable laws or the rights of others.

## Advertising

This website contains advertisements served by third-party advertising partners, including Adsterra. By using the website, you acknowledge that advertisements and related technologies may be provided by independent third parties.

We do not guarantee the accuracy, safety, availability, or content of any third-party advertisements, products, offers, or external pages displayed through advertising services.

## Third-Party Content and Services

This website may include content, embeds, links, media, or services provided by third parties. We do not own or control third-party content and are not responsible for its availability, accuracy, legality, or policies.

Your interactions with third-party services are solely between you and the respective third party.

## No Warranty

This website is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.

We do not guarantee that the website will always be available, uninterrupted, error-free, or free from harmful components.

## Limitation of Liability

To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from or related to your use of the website, third-party content, or third-party advertisements.

## Intellectual Property

All trademarks, logos, names, and copyrighted content appearing on the website belong to their respective owners.

## Changes to the Terms

We may revise these Terms of Service at any time by updating this page. Continued use of the website after changes become effective means you accept the revised Terms.

## Contact

If you have any questions regarding these Terms of Service, you may contact us through the website's available contact method.`;

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
