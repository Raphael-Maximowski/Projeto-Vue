<template>
        <footer>
        <div id="upbox">
            <div id="up1">
                <img src="../assets/imgFooter/logo.png" alt="">
            </div>
            <div id="up2">
                <ul>
                    <li>
                        <a href="https://www.marvel.com/corporate/about">ABOUT MARVEL</a>
                    </li>
                    <li>
                        <a href="https://help.marvel.com/hc/en-us">HELP FACS</a>
                    </li>
                    <li>
                        <a href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]">CARRERS</a>
                    </li>
                    <li>
                        <a href="https://www.marvel.com/corporate/interns">INTERNSHIPS</a>
                    </li>
                </ul>
            </div>
            <div id="up3">
                <ul>
                    <li>
                        <a href="https://www.marvel.com/corporate/advertising">ADVERTISING</a>
                    </li>
                    <li>
                        <a href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA">DISNEY+</a>
                    </li>
                    <li>
                        <a href="https://www.marvelhq.com/">MARVELHQ.COM</a>
                    </li>
                    <li>
                        <a href="https://www.marvel.com/redeem">DIGITAL COMICS</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr>
        <div id="middlebox">
            <div id="mb1">
                <div>
                    <img src="../assets/imgFooter/insiderend.png alt=">
                </div>
                <div>
                    <h2>MARVEL INSIDER</h2>
                    <h3>Get Rewarded for Being a Marvel Fan</h3>
                </div>
            </div>
            <div id="mb2">
                <div>
                    <img src="../assets/imgFooter/unlimitedendend.png" alt="">
                </div>
                <div>
                    <h2>MARVEL UNLIMITED</h2>
                    <h3>Acces Over 30,000+ Comics</h3>
                </div>
            </div>
        </div>
        <hr>
        <div id="bottombox">
            <h2>FOLLOW MARVEL</h2>
            <div id="boximg">
                <div>
                    <a href="https://www.facebook.com/Marvel/"><img src="../assets/imgFooter/facebook.png" alt=""></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/marvel/"><img src="../assets/imgFooter/instagram.png" alt=""></a>
                </div>
                <div>
                    <a href="https://www.tiktok.com/@marvel"><img src="../assets/imgFooter/tiktok.png" alt=""></a>   
                </div>
                <div>     
                    <a href="https://www.twitch.tv/Marvel"><img src="../assets/imgFooter/twitch.png" alt=""></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/marvel"><img src="../assets/imgFooter/video.png" alt=""></a>         
                </div>
                <div>
                    <a href="https://www.youtube.com/marvel"><img src="../assets/imgFooter/twitter.png" alt=""></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style scoped>

* {
            margin: 0px;
            padding: 0px;
            font-family: Arial, Helvetica, sans-serif;
        }

        footer {
            background-color: #151515;
            width: 100vw;
            height: 45vh;
        }

        ul {
            list-style-type: none;
            margin-top: 2em;
        }

        a {
            text-decoration: none;
            color: white;
            font-size: 20px;
        }

        a:hover {
            color: #5a5a5a;
            transition: 0.3s;
        }

        li {
            margin-bottom: 
            2em;
        }

        #upbox {
            display: flex;
        }

        #up1, #up2, #up3 {
            width: 33.33vw;
        }

        #up1 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #up1 img {
            width: 150px;
            height: 200px;
        }

        #middlebox {
            padding-top: 2em;
            display: flex;
            height: 4em;
            justify-content: center;
        }

        #middlebox h2 {
            color: white;
            font-size: 20px;
        }

        #mb1 h2{
            margin-left: 40px;
        }
        #mb1 h3 {
            margin-left: 40px;
        }

        #middlebox h3 {
            color: #5a5a5a;
            font-size: 17px;
        }
        #mb1, #mb2 {
            width: 50vw;
            display: flex;
            justify-content: center;
        }

        #mb1 img {
            width: 100px;
        }

        #boximg {
            display: flex;
            width: 100vw;
            justify-content: space-around;
            margin-top: 1em;
        }

        #bottombox h2 {
            margin-top: 1em;
            margin-bottom: 1em;
            margin-left: 60px;
            color: white;
        }

</style>

