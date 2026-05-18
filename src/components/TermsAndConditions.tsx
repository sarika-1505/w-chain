import Image from "next/image";

export default function TermsAndConditions() {
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
            Terms & Conditions
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
            Terms & Conditions of Access (W Chain)
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-10">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-8">
          
          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2 leading-tight">
            This website is owned and operated by W Chain and WP Worldwide Limited (“W Chain”).
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              These Terms and Conditions of Access ("Terms") constitute a legally binding agreement between you and WadzChain. These Terms govern the User's ("User" or "you") use of the WCO-related site(s), products and services made available to you on or through the platform or otherwise.
            </p>

            <p>
              By accessing any page or content on the website, you unconditionally agree to be bound by the terms and conditions outlined herein. If you do not accept any of these terms and conditions, you must immediately discontinue accessing this site.
            </p>

            <p>
              Your continued access to the website constitutes acceptance and agreement to be bound by the terms and conditions herein.
            </p>

            <p>
              By registering for an account under the W Chain system or site, accessing the platform and/or using any or all of the WCO-related sites or platforms, you agree that you have understood and unequivocally accepted these Terms, together with any additional documents or terms referred to in these Terms— all of which W Chain reserves to amend or supplement at any time, and shall be deemed accepted by you upon your continued use of this site. You acknowledge and agree that you will be bound by and will comply with these Terms, as updated and amended from time to time. If you do not agree to any of these Terms herein, you must cease the use of this site and all its related components or platforms <span className="font-bold">IMMEDIATELY.</span>
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            General Disclaimers
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              W Chain is a tech developer of WCO tokens and does not offer any financial or investment advice relating to the tokens or any associated themes; W Chain should NOT be deemed under any circumstances to be a provider of any such financial or investment advice, nor of any professional or legal advice, to the public at large ("User/s"). The WCO tokens are also not, by definition or construct, any form of securities in the relevant jurisdiction W Chain operates in.
            </p>

            <p>
              W Chain is an open-source, community-driven blockchain project still in its innovation stage, and any details or projections are merely indicative. W Chain thereby makes no guarantee whatsoever of future performance, outcomes, or any returns on contributions made to the network.
            </p>

            <p>
              All information, materials, and statements are provided for general information only on an 'as-is' and 'where available' basis, and should not be relied upon for making specific investment, financial, commercial, or business decisions. Users should seek independent professional advice at all times, and independent professional verification of the information, materials, and statements before making any decision in relation to the WCO, based on such information.
            </p>

            <p>
              W Chain is not subject to the purview of any regulatory agency, and operates as a decentralised project, thereby W Chain does not offer regulated financial instruments nor is WCO subject to any regulatory requirements of exchange-traded or mutual funds.
            </p>

            <p>
              In accessing this site and its related platforms and/or applications, Users confirm that they have sought independent third-party advice on their involvement with the WCO tokens and the community dealings, including in any buying and selling of WCO tokens outside of the aforesaid platforms.
            </p>

            <p>
              Some regulated services (if any) that are relating to the WCO activities conducted herein, will be provided by a W Chain partner who may have different policies for their site, application, or service, therefore that particular policy will take precedence and regulate that portion of the User's dealings with them. W Chain does not warrant the accuracy, adequacy, truth, or completeness of the information, materials, and statements contained in or accessed through this W Chain site or the external websites of these partners or the services, apps or products by these partners, and expressly disclaims liability for any errors or omissions therein. No warranty of any kind, implied, express, or statutory, including but not limited to fitness for a particular purpose, and freedom from computer viruses and other malicious code, is given by W Chain in conjunction with such information, materials, and statements or this website in general.
            </p>

            <p>
              The collective services of our W Chain website and platform, the portion of the aforementioned external partner services, and any technological services provided by W Chain shall include all our written or electronic materials including software, data, database, graphics, text, images, video, audio or other content ("Content"), all related features, services, content and applications which WadzChain and its related entities make available to you from time are all regulated by these terms and conditions of access that you confirm to have read, understood and agreed to.
            </p>

            <p>
              Engaging with the WCO ecosystem should be approached as participation in an experimental and innovative blockchain project. Users should be aware and accept that any contributed value may carry a risk of total loss (100%).
            </p>

            <p>
              WCO serves as the underlying asset for powering decentralized applications (“DApps”) and executing smart contracts on W Chain. Its value and utility depend on the network’s performance, adoption, and growth of the ecosystem.
            </p>

            <p>
              By participating in W Chain as a validator, node operator, or WCO holder, you acknowledge and unequivocally accept these terms, understanding the experimental nature and associated risks of the project. We encourage thorough research and consultation with professional advisors before making any decisions.
            </p>

            <p>
              Operating a validator, backup node, or standby node within W Chain is experimental, with no guarantee of future rewards or returns. Node operation should be seen as a contribution to the network’s progress and technological innovation.
            </p>

            <p>
              You agree that in no event shall W Chain be liable to you or any other party for any loss, damages, expenses, or costs whatsoever (including without limitation, any direct, indirect, special, incidental or consequential damages, loss of profits or loss opportunity) arising out of, or in connection with your use of this site, products or services, or your reliance on any information, materials, or online services provided herein.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            No Solicitation or Prospectus
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              The information, materials, and statements contained in or accessed through this website shall not be considered an offer to you or the public at large. Furthermore, they shall not be construed as an offer or solicitation to sell, buy, give, take, issue, allot, or transfer, or as advice related to any financial, commercial, investment, or business decision in any jurisdiction, and shall not be deemed to be an investment prospectus of any sort.
            </p>

            <p>
              All statements, estimates and financial information contained in this site, made in any press releases or statements that may be made by W Chain that are not statements of historical fact, constitute “forward-looking statements”. Such forward-looking terms such as “aim”, “target”, “anticipate”, “believe”, “could”, “estimate”, “expect”, “intend”, “may”, “plan”, “possible”, “project”, “should”, “would”, “will” etc are clearly forward-looking and may involve risks and uncertainties. Further, W Chain disclaims any responsibility to update any of those forward-looking statements or publicly announce any revisions to those forward-looking statements.
            </p>

            <p>
              This site and/or its components may only, subject to contract, support the provision of any payment service but W Chain does not enter into possession of money under that payment service.
            </p>

            <p>
              By continuing to access this site, you also confirm that you have sought your own independent advisors, and agree that W Chain has not induced or attempted to induce you or any person to enter into, or offered to enter into any agreement for or with a view to buying or selling any digital payment tokens or digital assets in general, in exchange for money or any other store of value; where you have entered into any agreement to buy or sell any digital payment tokens in exchange for money or any other digital payment tokens, you have done so of your own volition and independent of W Chain.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            Risks
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              You understand and agree that purchases of tokens should be undertaken only by individuals, entities, or companies that have significant experience with, and understanding of, the usage and intricacies of cryptographic tokens, including Ether, and blockchain based software systems. You agree that, to use this site and all our associated services, you should have a functional understanding of storage and transmission concepts associated with cryptographic tokens. If you do not have such expertise, then you should not purchase WCO-related products that may be deemed untested technology. Further, there are other risks associated with your purchase, possession and use of tokens, including minting of the token by W Chain, a poor understanding by management of any adverse changes to the supply of tokens, incomplete disclosure by management, misrepresentations made by moderators, consultants or employees in social media, as well as other unanticipated risks— all of which may have an impact on the value and price of the tokens. You agree that unanticipated variations or combinations of the risks discussed above may cause other risks to materialise.
            </p>

            <p>
              You understand and agree he value of products and services related to digital assets is highly volatile and often fluctuates. Some of the trading in relation to these products is based on speculation, and the traded price can fluctuate greatly in a short time. As such, the value can also become zero overnight, therefore you understand and accept that it is possible for you to lose every cent you put in any digital assets. In any event, you should take note that trading in digital assets and their derivatives is not for retail investors
            </p>

            <p>
              By continuing the use of this site and the related platforms, you acknowledge and accept that these risks involving tokens are ever present:
            </p>

            <ul className="list-disc pl-8 space-y-4 text-white/90">
              <li>
                Losing private key(s): If you lose your private key(s), lose access to your tokens or someone hacks into your digital wallet or otherwise knows of your private key, and such person(s) gain access to your tokens, and you lose access to your tokens.
              </li>
              <li>
                Money-laundering and terrorist financing: There may be a higher risk of being misused for illegal activities due to the pseudonymous nature of the transactions. As such, you could likely be adversely affected if authorities investigate any alleged illicit activities related to the tokens being minted, its business activities, or the trading of the token. If you suspect any such illegality has taken place, you MUST report it immediately to W Chain.
              </li>
              <li>
                Liquidity of your tokens: Even if the tokens can be traded in a secondary market, there is a risk you may be stuck with any tokens if there are not enough active buyers and sellers, or if the bid-ask spreads are too wide.
              </li>
              <li>
                International business climate: As with any traditional businesses, if any of the interfaces or platforms of this site ceases business due to any combination of legitimate business or financial reasons, you could lose all your money if your holdings losing value, or tokens service providers collapses (for example, due to unsustainable business models or international economic climate). You acknowledge and accept that the failure rate of start-ups is high, even if the digital token service is provided by an entity regulated by the authorities of your domicile.
              </li>
            </ul>

            <p>
              You understand and acknowledge that Decentralised Finance (DeFi) applications that might be used to engage in activities involving digital assets— such as trading, lending, borrowing, staking and yield farming— without the need for an intermediary or service provider, may not always be licensed or regulated.
            </p>

            <p>
              Consequently, you acknowledge and accept that you may not be able to recover any of the cryptocurrencies or monies that you deposited with the service provider/ DeFi application if they are stolen or lost due to hacking of your account, or due to any such misappropriation, or if the service provider/ DeFi application becomes insolvent or goes out of business.
            </p>

            <p>
              Due to the inherent nature of digital assets, you therefore acknowledge and accept that you may lose some or all of the monies that you use to purchase WCO tokens.
            </p>

            <p>
              You hereby acknowledge and agree the fact that all information provided in connection with your access and use of this site and the associated interfaces is intended for informational purposes only, and should not be construed as professional or investment advice, and that W Chain does not owe any duties or obligations to you based on the information provided on the interfaces. While W Chain strives to provide accurate information, it does not guarantee or warrant that any information herein is accurate, updated, complete, or timely. For this reason, you acknowledge and agree that you are not relying on any of the aforesaid information for any purpose, and you agree that W Chain shall not be liable for any such information provided herein.
            </p>

            <p>
              You warrant that you have independently verified any information relating to this site and interfaces, and will not take any action based solely on any such information found on any interface related to W Chain including blog posts, data, articles, links to third-party content, social media content, news feeds, tutorials and videos.
            </p>

            <p>
              None of the information provided on the Interfaces or any of the Features shall be interpreted as an invitation or inducement to exercise any rights to acquire, dispose of, underwrite, or convert any cryptoassets or digital assets or to buy, sell, or induce any person to buy or sell any cryptoassets or digital assets.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            Information, Security and Privacy
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              By your continued use of this site and the associated services, you expressly consent to the collection, storage, communication and processing of any of your information in this website by any means necessary for us to maintain appropriate transaction and account records and to the release and transmission to and the retention by the relevant third party service providers and hosts of your information to enable your use of the website.You acknowledge and accept that any information you submit and any content you transmit through our website may be stored on a computer server maintained by a third party. You acknowledge that such information or content could pass through and may be stored on servers outside our control. W Chain bears no liability or responsibility for any such pass-through or storage.
            </p>

            <p>
              You agree that your use of this site may be adversely affected by issues such as problems with your computer or electronic device, the internet or mobile phone network that are not within W Chain's control, and that interference and delays not caused by the W Chain site may also occur.
            </p>

            <p>
              You agree that all transmissions to and from this website cannot be guaranteed to be completely secure or error-free and may be intercepted, corrupted, lost, destroyed, or incomplete, or contain viruses and may not be received by the intended recipient. You understand and agree that you should not post or transmit any private or confidential content unless you want it to be available publicly. You understand that such content transmitted by you may be forwarded to a third party by the recipient, and we cannot control or prevent this transmission by a third party, and we cannot be responsible or held liable for the same. Accordingly, we do not warrant the privacy and/or security of any transmissions, by whatsoever means, to and from the website or in our services or products. Under no circumstances shall WadzChain be liable for any failure of performance, system, server, or connection failure, error, omission, interruption, breach of security, computer virus, malicious code, corruption, delay in operation or transmission, transmission error, or unavailability of access in connection with your accessing this website and/or using the online services (if applicable).
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            Disclaimer for links to external third-party websites or services
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              Any links we provide here on the site to external or third-party websites or apps are provided solely for Users’ convenience, and W Chain has no control over its content. Links taking Users to other such websites, if clicked, are done at Users’ own risk, and W Chain accepts no liability for any linked sites or their content.
            </p>

            <p>
              Such links are neither endorsed by W Chain nor do we accept any responsibility for the content or the use of such sites, and W Chain does not make any representations as to the quality, safety, suitability, veracity, security or reliability of any external Web sites or any of the content or materials contained in them. Users must necessarily take their own necessary precautions and exercise their own discretion, especially to ensure appropriate safety from viruses, worms, Trojan horses, and other potentially destructive items or those that can compromise their personal or financial details. As such, Users are also strongly advised to review those websites’ privacy policies and other terms of use to learn more about how they collect and use Users’ information.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            Intellectual Property Rights
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              The copyright in the contents, information, materials, and statements of the website is owned by WadzChain and/or its professional advisors. No part or parts hereof may be reproduced, distributed, republished, displayed, broadcast, hyperlinked, or transmitted in any manner or by any means without the prior written permission of WadzChain. Additionally, you may not insert a hyperlink to the website on any other website or “mirror” any material contained on the website on any other server or publication without prior written permission.
            </p>

            <p>
              All trademarks (including service marks) displayed on the website are the property of WadzChain and, where applicable, third-party proprietors identified on the website. No right or licence is given to any party accessing the website to download, reproduce or use any of such trade marks or services marks. No such trade mark or service mark may be used as a link to any WadzChain member's site or any other site unless establishment of such a link and use of such trade mark or service mark is approved in advance by the applicable WadzChain member in writing.
            </p>

            <p>
              You acknowledge that the contents of the foregoing provisions shall not limit any specific provisions set out in the individual terms and conditions of particular products and services offered on or through the website.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            No Liability
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              You agree that, in no event shall W Chain or any of its affiliates be liable to the User or any other party for any loss, damages, expenses, or costs whatsoever (including without limitation, any direct, indirect, special, incidental or consequential damages, loss of profits or loss opportunity) arising in connection with your use of this website, W Chain services or products or reliance on them. The User understands that he/she is solely responsible for decisions made in relation to the tokens and waive any right either under statutory laws, regulations or decrees, or under common law, to commence any action against W Chain under any cause of action.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            No Waiver
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              No failure or delay by W Chain in exercising or enforcing any right or option under these Terms shall operate as a waiver thereof or limit, prejudice, or impair our right to take any action or to exercise any right as against you or render us responsible for any loss or damage arising therefrom.
            </p>
            <p>
              If any one or more of the provisions in these Terms are deemed invalid, unlawful, or unenforceable in any respect under any applicable law, the validity, legality, and enforceability of the remaining provisions hereof shall not in any way be affected or impaired.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            Governing Law and Jurisdiction
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              By accessing this website and/or using the associated services (if applicable), you agree that such access and/or use, as well as these terms and conditions, shall be governed by and construed in accordance with the laws of the British Virgin Islands. You further agree to submit to resolving any and all disputes through the process of arbitration in the British Virgin Islands and/or the jurisdiction of the election of W Chain, and by your continued use of this site and its associated services, waive your right completely to avail yourself to any class action remedies or to commence any class action proceedings against W Chain.
            </p>
            <p>
              You further warrant that you are not on any designated sanctions list of prohibited or restricted persons, including but not limited to the lists maintained by the United Nations, the U.S. Government’s FATF and other regulatory bodies, the European Union or its Member States, the United Kingdom, or other applicable government authority and not located in any country subject to a comprehensive sanctions program implemented by the United States, in order to be accepted to use this site and our associated services.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2">
            Third Party Rights
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <p>
              A person who is not a party to these Terms or the specific agreements thereunder has no right under any applicable laws to enforce any terms herein.
            </p>
            <p className="uppercase">
              IF YOU DO NOT AGREE TO ANY OR ALL OF THE ABOVE, PLEASE DO NOT USE THE WEBSITE OR ANY OF THE W CHAIN SERVICES HEREIN AND EXIT IMMEDIATELY.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8"></div>

          <h2 className="text-[#2196F3] text-[24px] md:text-[32px] font-bold mb-2 uppercase">
            DEFINITIONS
          </h2>

          <div className="space-y-6 text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-light">
            <ul className="list-disc pl-8 space-y-4 text-white/90">
              <li>
                Token or WCO: A cryptographically secured digital utility token which will be created and used within the WCO Ecosystem and Economy and verified on the W Chain blockchain.
              </li>
              <li>
                Economy: WCO’s ecosystem in which the WCO token is utilized for transactions to support its products.
              </li>
              <li>
                Platform: The combined suite of technology and products on the web-based and other entire use of WCO components.
              </li>
              <li>
                WCO Wallet: Web based token wallet designed to allow tokenholders to top up their accounts, or withdraw WCO to other wallets.
              </li>
            </ul>
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
