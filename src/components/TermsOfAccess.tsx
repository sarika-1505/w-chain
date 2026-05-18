import Image from "next/image";

export default function TermsPage() {
  return (
    <div className="w-full bg-[#020B2D]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px] overflow-hidden rounded-b-[50px]">
        
        {/* Background Image */}
        <Image
          src="/terms-bg.png"
          alt="Terms Background"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.55)_35%,rgba(0,64,136,0.85)_100%)]
          "
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          
          <h1
            className="
              text-[42px]
              md:text-[64px]
              font-bold
              text-[#4EA5FF]
              leading-tight
            "
          >
            Terms of Access
          </h1>

          <p
            className="
              mt-4
              text-white
              text-[16px]
              md:text-[24px]
              font-medium
              max-w-[950px]
              leading-relaxed
            "
          >
            to the W Chain Website. Please read these terms and
            conditions carefully.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 justify-center">
          
          {/* Left Sidebar */}
          <div
            className="
              w-full lg:w-[390px]
              rounded-[24px]
              border border-[#4EA5FF]/40
              bg-[linear-gradient(180deg,#33415C_0%,#071B36_100%)]
              p-8
              h-fit
            "
          >
            <h3 className="text-[#4EA5FF] text-[28px] font-bold mb-6">
              On this page
            </h3>

            <div className="w-full h-[1px] bg-white/10 mb-6"></div>

            <ul className="space-y-6">
              {[
                "Legally Binding Agreement",
                "No Solicitation or Prospectus",
                "Risks",
                "Third-Party Websites or Services",
                "Intellectual Property Right",
                "No Liability",
                "No Waiver",
                "Governing Law and Jurisdiction",
                "Third Party Rights",
              ].map((item, index) => (
                <li
                  key={index}
                  className="
                    flex items-start gap-4
                    text-white/90
                    text-[18px]
                    leading-[28px]
                    hover:text-[#4EA5FF]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  {/* Icon */}
                  <div className="min-w-[20px] mt-1">
                    <div
                      className="
                        w-5 h-5 rounded-full
                        border border-[#4EA5FF]
                        flex items-center justify-center
                        text-[#4EA5FF]
                        text-[12px]
                      "
                    >
                      i
                    </div>
                  </div>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[797px]">
            
            <h2 className="text-[#2196F3] text-[42px] font-bold mb-8">
              Legally Binding Agreement
            </h2>

            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              
              <p>
                This website is owned and operated by W Chain and
                WP Worldwide Limited.
              </p>

              <p>
                These Terms and Conditions of Access (“Terms”)
                constitute a legally binding agreement between you
                and W Chain. These Terms govern the User’s (“User”
                or “you”) use of the W Chain site, products and
                services made available to you on or through the
                platform or otherwise.
              </p>

              <p>
                By accessing any page or content on the website,
                you unconditionally agree to be bound by the terms
                and conditions outlined herein. If you do not
                accept any of these terms and conditions, you must
                immediately discontinue accessing this site.
              </p>

              <p>
                Your continued access to the website constitutes
                acceptance and agreement to be bound by the terms
                and conditions herein.
              </p>

              <p>
               
The W Chain site, products or services are not offered in Singapore, the United Arab Emirates, North America, North Korea, Russia, Ukraine and all sanctioned countries. Therefore, if you are a citizen or resident of the aforesaid countries, you understand and agree that you will not utilise any of this site and its products or services, and exit this site immediately.
              </p>
              <p>By registering for an account under the W Chain system or site, accessing the platform and/or using any or all of the W Chain site, you agree that you have understood and unequivocally accepted these Terms, together with any additional documents or terms referred to in these Terms— all of which W Chain reserves to amend or supplement at any time, and shall be deemed accepted by you upon your continued use of this site. You acknowledge and agree that you will be bound by and will comply with these Terms, as updated and amended from time to time.</p>

              <p>W Chain is a tech developer of WCO tokens and does not offer any financial or investment advice relating to the tokens or any associated themes; W Chain should not be deemed under any circumstances to be a provider of any such financial or investment advice, nor of any professional or legal advice, to the public at large (“User/s”). The tokens are also not, by definition or construct, any form of securities in the relevant jurisdiction W Chain operates in. </p>
              <p>W Chain is an open-source, community-driven blockchain project still in its innovation stage, and any details or projections are merely indicative. W Chain thereby makes no guarantee whatsoever of future performance, outcomes, or any returns on contributions made to the network.</p>
              <p> All information, materials, and statements are provided for general information only on an ‘as-is’ and ‘where available’ basis, and should not be relied upon for making specific investment, financial, commercial, or business decisions. Users should seek professional advice at all times, and independent verification of the information, materials, and statements is strongly recommended before making any decision in relation to the WCO, based on such information.</p>
              <p>W Chain is not subject to the purview of any regulatory agency, and operates as a decentralised project, thereby W Chain does not offer regulated financial instruments nor is W Coin subject to any regulatory requirements of exchange-traded or mutual funds.</p>
              <p>In accessing this website and its related platforms and/or applications, Users confirm that they have sought independent third-party advice on their involvement with the WCO tokens and the community dealings, including in any buying and selling of WCO tokens outside of the aforesaid platforms.</p>
              <p>Some regulated services (if any) that are relating to the WCO activities conducted herein, will be provided by a W Chain partner who may have different policies for their site, application, or service, therefore that particular policy will take precedence and regulate that portion of the User’s dealings with them. W Chain does not warrant the accuracy, adequacy, truth, or completeness of the information, materials, and statements contained in or accessed through this W Chain website or the external websites of these partners or the services, apps or products by these partners, and expressly disclaims liability for any errors or omissions therein. No warranty of any kind, implied, express, or statutory, including but not limited to fitness for a particular purpose, and freedom from computer viruses and other malicious code, is given by W Chain in conjunction with such information, materials, and statements or this website in general.</p>
              <p>The collective services of our W Chain website and platform, the portion of the aforementioned external partner services, and any technological services provided by W Chain shall include all our written or electronic materials including software, data, database, graphics, text, images, video, audio or other content (“Content”), all related features, services, content and applications which W Chain and its affiliates may make available to you from time to time are all regulated by these terms and conditions of access that you confirm to have read, understood, and agreed to. Engaging with W Chain should be approached as participation in an experimental and innovative blockchain project. Users should be aware and accept that any contributed value may carry a risk of total loss (100%).</p>
              <p>W Coin (WCO) serves as the underlying asset for powering decentralized applications (“DApps”) and executing smart contracts on W Chain. Its value and utility depend on the network’s performance, adoption, and growth of the ecosystem. By participating in W Chain as a validator, node operator, or WCO holder, you acknowledge and accept these terms, understanding the experimental nature and associated risks of the project. We encourage thorough research and consultation with professional advisors before making any decisions.</p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              No Solicitation or Prospectus
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                The information, materials, and statements contained in or accessed through this website shall not be considered an offer to you or the public at large. Furthermore, they shall not be construed as an offer or solicitation to sell, buy, give, take, issue, allot, or transfer, or as advice related to any financial, commercial, investment, or business decision in any jurisdiction, and shall not be deemed to be an investment prospectus of any sort.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              Risk
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                You agree that your use of the website may be adversely affected by issues such as problems with your computer or electronic device, the internet, and the cellular phone network that are not within W Chain&apos;s control, and that interference and delays not caused by our website may also occur.
              </p>
              <p>
                If applicable, any information you submit and any content you transmit through our website may be stored on a computer server maintained by a third party. You acknowledge that such information or content could pass through and may be stored on servers outside our control. We bear no liability or responsibility for any such pass-through or storage.
              </p>
              <p>
                You expressly consent to the collection, storage, communication and processing of any of your information in this website by any means necessary for us to maintain appropriate transaction and account records and to the release and transmission to and the retention by the relevant third party service providers and hosts of your information to enable your use of the website.
              </p>
              <p>
                You agree that all transmissions to and from this website cannot be guaranteed to be completely secure or error-free and may be intercepted, corrupted, lost, destroyed, or incomplete, or contain viruses and may not be received by the intended recipient. You understand and agree that you should not post or transmit any private or confidential content unless you want it to be available publicly. You understand that such content transmitted by you may be forwarded to a third party by the recipient, and we cannot control or prevent this transmission by a third party, and we cannot be responsible or held liable for the same. Accordingly, we do not warrant the privacy and/or security of any transmissions, by whatsoever means, to and from the website or in our services or products.
              </p>
              <p>
                Under no circumstances shall W Chain be liable for any failure of performance, system, server, or connection failure, error, omission, interruption, breach of security, computer virus, malicious code, corruption, delay in operation or transmission, transmission error, or unavailability of access in connection with your accessing this website and/or using the online services (if applicable) online services (if applicable)..
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              Disclaimer for links to external third-party websites or services
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                Any links we provide here on the site to external or third-party websites or apps are provided solely for Users&apos; convenience and W Chain has no control over its content. Links taking Users to other such websites, if clicked, are done at Users&apos; own risk, and W Chain accepts no liability for any linked sites or their content.
              </p>
              <p>
                Such links are neither endorsed by W Chain nor do we accept any responsibility for the content or the use of such sites, and W Chain does not make any representations as to the quality, safety, suitability, veracity, security or reliability of any external Web sites or any of the content or materials contained in them. Users must necessarily take their own necessary precautions and exercise their own discretion, especially to ensure appropriate safety from viruses, worms, Trojan horses, and other potentially destructive items, or those that can compromise their personal or financial details. As such, Users are also strongly advised to review those websites&apos; privacy policies and other terms of use to learn more about how they collect and use Users&apos; information.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              Intellectual Property Rights
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                The copyright in the contents, information, materials, and statements of the website is owned by W Chain and/or its professional advisors. No part or parts hereof may be reproduced, distributed, republished, displayed, broadcast, hyperlinked, or transmitted in any manner or by any means without the prior written permission of W Chain. Additionally, you may not insert a hyperlink to the website on any other website or &ldquo;mirror&rdquo; any material contained on the website on any other server or publication without prior written permission.
              </p>
              <p>
                All trademarks (including service marks) displayed on the website are the property of W Chain and, where applicable, third-party proprietors identified on the website. No right or licence is given to any party accessing the website to download, reproduce or use any of such trade marks or services marks. No such trade mark or service mark may be used as a link to any W Chain member&apos;s site or any other site unless establishment of such a link and use of such trade mark or service mark is approved in advance by the applicable W Chain member in writing.
              </p>
              <p>
                You acknowledge that the contents of the foregoing provisions shall not limit any specific provisions set out in the individual terms and conditions of particular products and services offered on or through the website.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              No Liability
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                You agree that, in no event shall W Chain or any of its affiliates be liable to the User or any other party for any loss, damages, expenses, or costs whatsoever (including without limitation, any direct, indirect, special, incidental or consequential damages, loss of profits or loss opportunity) arising in connection with your use of this website, W Chain services or products or reliance on them. The User understands that he/she is solely responsible for decisions made in relation to the tokens and waive any right either under statutory laws, regulations or decrees, or under common law, to commence any action against W Chain under any cause of action.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              No Waiver
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                No failure or delay by W Chain in exercising or enforcing any right or option under these Terms shall operate as a waiver thereof or limit, prejudice, or impair our right to take any action or to exercise any right as against you or render us responsible for any loss or damage arising therefrom.
              </p>
              <p>
                If any one or more of the provisions in these Terms are deemed invalid, unlawful, or unenforceable in any respect under any applicable law, the validity, legality, and enforceability of the remaining provisions hereof shall not in any way be affected or impaired.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              Governing Law and Jurisdiction
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                By accessing this website and/or using the associated services (if applicable), you agree that such access and/or use, as well as these terms and conditions, shall be governed by and construed in accordance with the laws of the British Virgin Islands. You further agree to submit to the process of arbitration in the British Virgin Islands and/or the jurisdiction of the election of WP Worldwide Limited.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-10"></div>

            <h2 className="text-[#2196F3] text-[32px] font-bold mb-6">
              Third Party Rights
            </h2>
            <div className="space-y-8 text-white text-[20px] leading-[34px] font-light">
              <p>
                A person who is not a party to these Terms or the specific agreements thereunder has no right under any applicable laws to enforce any terms herein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full pt-12 pb-44 px-4 md:px-10 flex justify-center relative z-10 bg-[#020B2D] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#020B2D] -z-10 pointer-events-none" />
        <div 
          className="
            max-w-[1206px] w-full h-[350px]
            flex flex-col items-center justify-center
            px-6 md:px-16 
            rounded-[20px] 
            border border-[#8BC9D4]/40
            bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(28,96,107,0.3)_100%)]
            text-center
            relative
            overflow-hidden
          "
        >
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,165,255,0.1),transparent_70%)]" />

          <h2 className="relative z-10 text-[#2196F3] text-[32px] md:text-[48px] font-bold mb-4 leading-tight">
            Connect, Collaborate and Thrive
          </h2>
          
          <p className="relative z-10 text-white text-[16px] md:text-[19px] leading-[28px] max-w-[900px] mx-auto mb-8 font-light">
            Ready to be part of something big? The W Chain community is waiting for you! 
            Connect with fellow enthusiasts, contribute to exciting projects, and help shape the future of 
            finance. Join us today and let's build the decentralized world together!
          </p>

          <button 
            className="
              relative z-10
              inline-flex items-center gap-3 
              bg-gradient-to-r from-[#1C606B] to-[#2196F3] 
              text-white text-[16px] md:text-[18px] font-medium 
              px-10 py-3 
              rounded-full 
              hover:opacity-90 transition-opacity
              border border-white/20
            "
          >
            Join the Revolution
            <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </section>

    </div>
  );
}