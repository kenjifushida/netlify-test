<template>
    <div class="subpage">
        <h5>{{subpage.id}}. {{subpage.title}}</h5>
        <Steps :steps="steps" :subpage_id="subpage.id" />
    </div>
    
</template>

<script>
import Steps from './Steps'

export default {
    name: 'Subpage',
    props: {
        subpage: Object
    },
    components: {
        Steps
    },
    data() {
        return {
            steps: [{
                "subpage": "1",
                "id": "01",
                "text": "First, connect to the wireless LAN used for setting up network access on new devices. If you have a mobile router or any other method to connect to the internet, skip to STEP 03. If not, click ❷ 'Join Other Network...' from the list of ❶ Wi-Fi icon.",
                "img": "cns_mac1.png"
            },
            {
                "subpage": "1",
                "id": "02",
                "text": "Type '000000SFC' in ❶ 'Network Name.' Uncheck ❷'Remember this network.' Then, click ❸ 'Join.'<br/><br/>＊ '000000SFC' can only be used for setting up Wireless LAN connection. It can not be connected outside campus.",
                "img": "cns_mac2.png"
            },
            {
                "subpage": "1",
                "id": "03",
                "text": "Open a web browser and go to the following URL :⇒ https://itcsecure.sfc.keio.ac.jp/wlan/?lang=en <br/><br/>Type your CNS login name in ❶ and your CNS login password in ❷ . Then, click ❸ 'Start the registration.'",
                "img": "cns_mac3.png"
            },
            {
                "subpage": "1",
                "id": "04",
                "text": "If this is your first time creating a personal certificate, select 'Issue' in ❶ and click ❷ 'Submit.'<br/><br/>If you have already issued your personal certificate and the certificate is still valid, select 'Download' in ❶ , click ❷ 'Submit,' and skip to STEP 06.<br/><br/> New students have already issued a personal certificate at the time of CNS account pre-registration, so select 'Download' and move on to STEP 06.<br/><br/>The certificate is valid for the duration of the student's enrollment",
                "img": "cns_mac4.png"
            },
            {
                "subpage": "1",
                "id": "05",
                "text": "Make a new passphrase for your personal certificate. This passphrase is necessary to protect your personal certificate against unauthorized use and must contain at least 8 characters. Enter your passphrase in ❶ and ❷ , then click ❸ 'Issue the personal certificate.' This passphrase will be used in STEP 08.",
                "img": "cns_mac5.png"
            },
            {
                "subpage": "1",
                "id": "06",
                "text": "Your download will begin automatically. Once completed, open the file you just downloaded. If download does not begin, click ❶ 'Download' to save the file and open the certificate.<br/><br/>If your personal certificate has expired, please click on the Delete Old Certificate button below.",
                "img": "cns_mac6.png"
            }
            ]
        }
    }
}
</script>

<style scoped>
.subpage h5 {
    padding-top: 40px;
    padding-bottom: 40px;
    color: #FFAF51;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;

}
</style>