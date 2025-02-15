import { tenorsans } from "@/fonts/fonts";

export default function TermsAndConditions() {
  return (
    <div className="min-h-[50vh] mb-12 max-w-4xl mx-auto p-4">
      <h2 className={`${tenorsans.variable} font-tenor text-center text-3xl sm:text-4xl font-semibold mb-6`}>Terms And Conditions</h2>
      <div className="border-b border-gray-300 mb-6"></div>
      <p className="text-lg mb-4">Last updated on Jan 4th, 2025</p>

      <p>For the purpose of these Terms and Conditions, the terms "we", "us", "our" refer to CALVOR, whose registered/operational office is Plot No-623, Norville, Mathrusri Nagar, Miyapur, Hyderabad, TELANGANA 500049. "You", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.</p>

      <p>Your use of the website and/or purchase from us are governed by the following Terms and Conditions:</p>

      <ul className="list-disc pl-6 space-y-4">
        <li>The content of the pages of this website is subject to change without notice.</li>
        <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
        <li>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through our website and/or product pages meet your specific requirements.</li>
        <li>Our website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
        <li>All trademarks reproduced on our website that are not the property of, or licensed to, the operator are acknowledged on the website.</li>
        <li>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
        <li>From time to time, our website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
        <li>You may not create a link to our website from another website or document without CALVOR’s prior written consent.</li>
        <li>Any dispute arising out of the use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</li>
        <li>We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
      </ul>
    </div>
  );
}

