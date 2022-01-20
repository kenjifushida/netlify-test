<template>
    <UnfixHeader />
    <div class="content">
    <h1>Frequently Asked Questions</h1>
    <h2>Table of contents</h2>
    <ol>
        <li><a href="#mail">Mail</a>
        </li>
        <li><a href="#printer">Printer</a>
        </li>
        <li><a href="#wifi">Wi-Fi</a>
        </li>
        <li><a href="#contact">Contact</a>
        </li>
    </ol>
    <h2><a href="/email" id="mail">Mail</a></h2>
    <h3>I forgot/ need to change my IMAP/SMTP-AUTH Password
    </h3>
    <p><i>This section pertains to changing your email password</i><br>
        Note: You can change your mail password as long as you know your CNS password<br>
    <ol>
        <li>Open a web browser and go to the following URL:
            <ol type="a">
                <li><a href="https://itcsecure.sfc.keio.ac.jp/form/password/">https://itcsecure.sfc.keio.ac.jp/form/password/</a></li>
            </ol>
        </li>
        <li>Type your new IMAP/SMTP-AUTH password in and click 'Submit'. The IMAP/SMTP-AUTH password must be longer than
            10 letters, including lower and uppercase letters and numbers, and it must be different from your CNS login
            password.
        </li>
    </ol>
    </p>
    <h3>Thunderbird has issues</h3>
    <ol>
        <li>To change the settings in Thunderbird, click 'Account Settings' from 'Tools.'</li>
        <li>Incoming Receiving Servers Click 'Server Settings' to check the current setting of incoming servers.</li>
        <li>Outgoing Sending Servers Click 'Outgoing Server (SMTP)' to check to send server settings. If you encounter
            any strange error messages or have difficulties solving an issue by yourself, please visit the ITC CNS
            service desk or the CNS consultant booth. </li>
    </ol>
    <h2><a href="/printer" id="printer">Printer</a></h2>
    <h3>I forgot/need to check my IPP Password</h3>
    <p>
        <i>Internet Printing Protocol (IPP) refers to the framework for connecting to the school's printers via the
            internet.</i><br>
    <ol>
        <li>Open a web browser and go to the following URL:
                <a
                    href="https://itcsecure.sfc.keio.ac.jp/form/password/ ">https://itcsecure.sfc.keio.ac.jp/form/password/
                </a>
        </li>
        <li>
            Click 'Confirm' to check IPP Password. Click 'Create/ Change' to change your IPP password. 06 Checking Web
            Database Password Click 'Confirm' to check your Web Database Password. Click 'Create/Change' to change your
            Web Database Password.
        </li>
    </ol>
    </p>
    <h3>Problems with internet connectivity for CNS Printers</h3>
    <ol>
        <li>Check Wireless LAN Connectivity Printing requires internet connectivity; please check your network
            connectivity and try again. </li>
        <li>Check File Size of Printing Jobs Reduce the size of the file you are trying to print. If your file is too
            big, it may take a while to be sent to the CNS printers. Changing the file format may also help make the
            file smaller.
        </li>
        <li>Check Printer Status Occasionally, printers may show errors if they run out of toner or paper. If CNS
            printers display any errors, please contact Shonan Fujisawa Campus ITC or the CNS Consultants immediately.
        </li>
        <li>Check Setting for Printers Your computer might not be properly configured if you are having problems with
            printing. Please set up the printer profile again by following the instructions on 【CNS Printers】.
        </li>
        <li>If you cannot send emails even though your sending and receiving email addresses are correct, your email
            client configuration might need to be updated. Please refer to 【Configuring Your CNS Mail on Your
            PC(Windows10), Configuring Your CNS Mail on Your Mac(mac OS)】 and set up your mail client again. </li>
    </ol>
    <h2><a href="/wifi" id="wifi">Wi-Fi</a></h2>
    <h3>I cannot connect to the internet.</h3>
    <ol>
        <li>
            Check Your Physical Switch. Your computer may have a physical switch for controlling wireless adapters.
            Please look for a WiFi switch on your computer and access the system configuration on your computer to
            ensure that your wireless adapter is turned on.
        </li>
        <li>Check your certificate expiration. You can confirm the expiration date of your certificate by following the
            instructions at the following site. Once the expiration date has passed, you will not be able to connect to
            the campus wireless LAN, so you will need to delete the old certificate and reissue a new one. For more
            details, please refer to the website below.<br>
            ⇒ <a href="https://secure.itc.keio.ac.jp/c/a/sfc/en/network_information_wireless_802_1x_renew.html">https://secure.itc.keio.ac.jp/c/a/sfc/en/network_information_wireless_802_1x_renew.html</a>
        </li>
        <li>Reconfigure Wireless Network. In some cases, your wireless network setting might not have been configured
            correctly. Please reconfigure the device; refer to 【 Wireless LAN】. </li>
    </ol>
    <h2 id="contact">SFC-CNS Technical Support Service</h2>
    <p>Shonan Fujisawa ITC (Information Technology Center)</p>
    <p>Shonan Fujisawa ITC (Information Technology Center)<br>
        Media Center North First Floor CNS Service Desk E-mail Address cns-request@sfc.keio.ac.jp Website
        https://www.sfc.itc.keio.ac.jp<br>
        Opening hours 9:15 - 17:00 (Closed on Saturdays, Sundays, public holidays, and holidays set by Keio.)<br>
        Tel.： 0466-49-3423 Extension： 52512<br>
        <br>
        Hotline (Weekdays) <br>
        9:15 - 20:50（Spring/Fall semester） <br>
        9:15 - 17:50（Summer/Winter break period） <br>
        <br>
        Hotline (Saturday) <br>
        9:15 - 18:50（Spring/Fall semester）　　 <br>
        9:15 - 15:50（Summer/Winter break period）<br>
        <br>
        (Closed on Sundays, and public holidays.)<br>
        <br>
        Please send any questions you have about SFC-CNS to Shonan Fujisawa ITC or CNS Consultants. You can also check
        the website for further up-to-date information:<br>
        ⇒ <a href="https://www.sfc.itc.keio.ac.jp/en/top_sfc.ht">https://www.sfc.itc.keio.ac.jp/en/top_sfc.ht</a><br>
    </p>
    </div>
    <Footer />
</template>

<script>
import UnfixHeader from '../components/UnfixHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "site_policy",
    components: {
        UnfixHeader,
        Footer
    },
    methods: {
        returnToPage: function(id) {

        }
    }
}
</script>

<style scoped>
.content {
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

.content h3 {
    font-size: 1.6rem;
    margin: 1rem 0rem;
}

.content p{
    font-size: 1.3rem;
    margin: 1rem 0rem;
}

.content li {
    list-style: inside;
    font-size: 1.3rem;
}

#mail, #printer, #wifi, #contact {
    color: black;
    text-decoration: none;
}

#mail:hover, #printer:hover, #wifi:hover {
    color: rgb(255, 170, 43);
    text-decoration: none;
}

a:link {
    color: rgb(85, 85, 85);
    text-decoration: underline;
}

a:visited {
    color: darkslategray;
    text-decoration: underline;
}

a:hover {
    color: rgb(255, 170, 43);
    text-decoration: underline;
}
</style>