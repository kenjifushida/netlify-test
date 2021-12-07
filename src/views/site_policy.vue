<template>
    <div class="content">
        <h1>Site Policy</h1>
        <p >The PROJECT CNS website (“Website” hereinafter) is operated by PROJECT CNS  (“PROJECT CNS” hereinafter). Before using this Website, please read and consent to the following usage conditions.
        </p>
        <h2>Disclaimer</h2>
        <p >PROJECT CNS does not provide any guarantee whatsoever regarding the completeness and accuracy of the information that appears on this Website. PROJECT CNS may change the information appearing on this Website without prior notice.
        </p>
        <p >By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
        <h2>Copyrights & Trademarks</h2>
        <p >The copyrights to all text, images, logos, photographs, videos and animations, software, and all other information contained on the Website belong to PROJECT CNS or a third party.
        </p>
        <p >You shall not use (including copying, altering, distributing, and sending to the general public) this information without obtaining the prior consent of the copyright owner, unless acceptable under copyright law, such as in the case of private use.
        </p>
        <p >PROJECT CNS product or service names appearing on this Website are PROJECT CNS trademarks or registered trademarks.
        </p>
        <h2>Linking to this Web site
        </h2>
        <p >In principle, linking to this Web site is permitted from any commercial or non-commercial purpose. However, a link this Web site is prohibited on any website that falls into, or may be categorized, as any of the following.
        </p>
        <ul >
            <li>Websites that include content intended to slander or injure the reliability of PROJECT CNS, another company (or individual), or another organization
            </li>
            <li>Websites that engage in or may possibly engage in conduct that infringes upon the intellectual property rights, such as copyrights or trademark rights, or assets, privacy, right of portrait, or any other rights of PROJECT CNS, another company (or individual), or another organization
            </li>
            <li>Websites that make it unclear that the displayed content is PROJECT CNS content or have the possibility of misrepresenting to a third party through a method such as displaying this Website within a frame (PROJECT CNS requests that you set links to this Website so that either the browser window changes completely to the destination page, or the destination page opens up in a new browser window)
            </li>
            <li>In addition to the above, any website which engages in conduct that violates laws and ordinances, including acts, regulations, or rules, or goes against generally accepted rules of morality or conduct that interferes with the operation of this Website’s service
            </li>
            <li>PROJECT CNS does not authorize the posting of links using registered trademarks, such as logos and marks owned by PROJECT CNS, without permission. PROJECT CNS does not allow the posting of links in such a way as to misidentify the information source.
            </li>
            <li>Please be aware that PROJECT CNS may change the URL for this Website and is not able to send notification to your website.
            </li>
        </ul>
        <h2>Security</h2>
        <p >PROJECT CNS has issued a Security Statement based on its Basic Policy Regarding Information Security (established in FY 2004). In addition to disclosing this Statement both within and outside the company, PROJECT CNS pledges to comply with this Statement in accordance with Privacy Policy compliance.
        </p>
        <h2>Recommended Environment
        </h2>
        <p >For a safer and more pleasant experience, PROJECT CNS recommends that you view this Website on one of the following browsers.
        </p>
        <ul >
            <li>Windows (11/10/8/7/XP/Vista)
            </li>
            <li>Microsoft Internet Explorer 8.0 or higher
            </li>
            <li>Mozilla Firefox latest version
            </li>
            <li>Google Chrome latest version
            </li>
            <li>Macintosh (Mac OS X 10.6 or higher)
            </li>
            <li>Safari 5.0 or higher
            </li>
        </ul>
        <h2>Plug-ins
        </h2>
        <p >Adobe Flash Player (Flash Player 9.0.115 or higher) is required to view some pages in this Website.
        </p>
        <p>Also, Adobe Reader (Acrobat Reader 7.0 or higher) is required to view and print PDF files and a digital media player like RealPlayer, RealOne Player, or Microsoft Windows Media Player is required to view and listen to video clips.
        </p>
        <p >The newest versions are required for some pages.
        </p>
        <h2>Cookies
        </h2>
        <p >This Website uses cookies in order to make your experience at this Website more convenient and in order to enable us to continually improve the Website.
            A cookie is a piece of information regarding the operation of this Website that is sent to your browser from the server and stored on your computer.
            Cookies do not have any direct adverse effect on your computer.
            PROJECT CNS may use our own cookies or the cookies of a third-party company with which PROJECT CNS has a subcontracting agreement, in order to track the access status of this Website.
            You can refuse to accept cookies by changing the settings in your browser. Doing so will not greatly impair your ability to view this Website. To learn how to change your browser settings, please consult the help page of your browser, or contact the manufacturer.
            </p>
        <h2>About access data
        </h2>
        <p>This Website may contain pages that are embedded with collection tags used to tally the access status of visitors to the Website. Access status includes the URL(s) of the page(s) accessed, the date and time of access, information that identifies the browser, etc.
            PROJECT CNS uses this access data to improve customer convenience and to maintain and improve the quality of the Website. In addition, combining access data with cookies and a personal identifier conferred by PROJECT CNS (PROJECT CNS identifier) as well as customer attribute information enables us to display on the Website information that may be beneficial to the individual customer.
            You can disable (opt out of) this feature via the opt-out page of the company given below. Doing so will stop the use by us of the PROJECT CNS identifier and your customer attribute information on this Website.
        </p>
        <h2>About cookie-based advertisement distribution by third-party advertisement distributors
        </h2>
        <p>PROJECT CNS’s advertisements appear on various Internet websites due to our tie-ups with a number of third-party advertisement distribution companies.
            These third-party advertisement distribution companies distribute these advertisements using cookies, access data, PROJECT CNS identifiers and customer attribute information. The information used by the advertisement distribution companies is processed by PROJECT CNS so that no individual customer can be identified by any advertisement distribution company.
            By accessing the opt-out page of each of the advertisement distributors listed below, you can disable this feature and prevent the use of cookies and access data by the advertisement distributors.
            </p>
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
    name: "site_policy",
    components: {
        Footer
    }
}
</script>

<style scoped>
.content {
  padding-top: 80px;
  width: 80%;
  margin: 0 auto;
  display: block;
}

.content h1 {
    font-size: 2.5rem;
    margin: 1rem 0rem;
}

.content h2 {
    font-size: 2.1rem;
    margin: 1rem 0rem;
}

.content p{
    font-size: 1.4rem;
    margin: 1rem 0rem;
}

.content li {
    list-style: inside;
    font-size: 1.4rem;
}
</style>