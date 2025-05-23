---
title: "People"
permalink: /people/
author_profile: true
---


<style>
        .people-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 30px;
            justify-items: left;
        }
        .people {
            text-align: center;
            width: 100%;
            max-width: 200px; /* Fixed maximum width for each item */
        }
        .people img {
            width: 100%;
            border-radius: 10px;
        }
        @media (max-width: 768px) { /* Mobile view adjustments */
            .people-container {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }
            .people {
                max-width: 190px; /* Adjust the max-width for mobile view */
            }
        }
        @media (max-width: 480px) { /* Small screen adjustments */
            .people-container {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }
            .people {
                max-width: 100px; /* Adjust the max-width for small screen view */
            }
        }
        html { overflow-y: scroll; }
    </style>



<style>
        .button-container {
            margin-bottom: 20px;
            text-align: center;
        }
        .filter-button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border: none;
            background-color: grey;
            color: white;
            border-radius: 5px;
        }
        .filter-button.active {
            background-color: #ff5050;
            color: white;
        }
    </style>
<script>
        function filterTeam(type) {
            var members = document.getElementsByClassName('people');
            for (var i = 0; i < members.length; i++) {
                if (members[i].classList.contains(type) || type === 'all') {
                    members[i].style.display = '';
                } else {
                    members[i].style.display = 'none';
                }
            }
            var buttons = document.getElementsByClassName('filter-button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
            document.getElementById(type + '-button').classList.add('active');
        }
</script>

<script>
function toggleVisibility(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}
</script>

<div class="button-container">
    <button id="all-button" class="filter-button active" onclick="filterTeam('all')">All</button>
    <button id="academic-button" class="filter-button" onclick="filterTeam('academic')">Academics</button>
    <button id="researcher-button" class="filter-button" onclick="filterTeam('researcher')">Researchers</button>
    <button id="administrative-button" class="filter-button" onclick="filterTeam('administrative')">Administrative</button>
    <button id="doctoral-button" class="filter-button" onclick="filterTeam('doctoral')">Doctoral Researchers</button>
    <button id="honorary-button" class="filter-button" onclick="filterTeam('honorary')">Honorary and visiting</button>
    <button id="alumni-button" class="filter-button" onclick="filterTeam('alumni')">Alumni</button>
</div>


<div id="people" style="display: flex; flex-wrap: wrap; justify-content: left;">
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://s2lab.cs.ucl.ac.uk"><img src="../images/holding.png" alt="Mohamed Abouhashem" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Mohamed Abouhashem</strong><br>
            Doctoral Researcher (Visitor)
        </p>
    </div> 
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/99243-valeria-abreu-minero"><img src="../images/val.jpg" alt="Valeria Minero Abreu" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Valeria Minero Abreu</strong><br>
        Senior Research Fellow</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://sharad1126.github.io/"><img src="../images/sharad.jpg" alt="Sharad Agarwal" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Sharad Agarwal</strong><br>
            Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://kylebeadle.com"><img src="../images/beadle.jpg" alt="Kyle Beadle" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Kyle Beadle</strong><br>
            Doctoral Resarcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/daniel-blackwell.jpg" alt="Daniel Blackwell" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Daniel Blackwell</strong><br>
            Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/blancato.jpg" alt="Filippo Blancato" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Filippo Blancato</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people administrative" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="mailto:s.bottomley@ucl.ac.uk"><img src="../images/holding.png" alt="Samantha Bottomley" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Samantha Bottomley</strong><br>
        MSc Information Security Administrator</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/sergi-bray.jpg" alt="Sergi Bray" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Sergi Bray</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/64074-madeline-carr"><img src="../images/madeline2.jpeg" alt="Madeline Carr" style="width: 100%; border-radius: 10px;"></a><br>
        <p><strong>Madeline Carr</strong><br>
        Professor of Global Politics and Cyber Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://www.tristancaulfield.com/"><img src="../images/tristan2.jpg" alt="Tristan Caulfield" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Tristan Caulfield</strong><br>
        Associate Professor of Information Security</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Thomas Cattermole" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Thomas Cattermole</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://s2lab.cs.ucl.ac.uk/people/sullivan"><img src="../images/lorenzo.jpg" alt="Lorenzo Cavallaro" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Lorenzo Cavallaro</strong><br>
        Professor of Computer Science </p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://s2lab.cs.ucl.ac.uk"><img src="../images/jacopo.jpg" alt="Jacopo Cortellazzi" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Jacopo Cortellazzi</strong><br>
             Doctoral Researcher (Visiting)
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www0.cs.ucl.ac.uk/staff/G.Danezis/"><img src="../images/george.jpg" alt="George Danezis" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>George Danezis</strong><br>
        Professor of Security and Privacy Engineering (PT) and Chief Scientist at Mysten Labs</p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/Ahana.jpg" alt="Ahana Datta" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Ahana Datta</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Kyriacos Demetriou" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Kyriacos Demetriou</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://s2lab.cs.ucl.ac.uk"><img src="../images/giulio.jpeg" alt="Giulio De Pasquale" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Giulio De Pasquale</strong><br>
             Doctoral Researcher (Visiting)
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/jennifer-dwyer-joyce.jpg" alt="Jennifer Dwyer-Joyce" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Jennifer Dwyer-Joyce</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/eusebi.jpg" alt="Aliai Eusebi" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Aliai Eusebi</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://ganevgv.github.io/"><img src="../images/ganevgv.jpg" alt="Georgi Ganev" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Georgi Ganev</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://arthurgervais.com/"><img src="../images/Arthur.jpg" alt="Arthur Gervais" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Arthur Gervais</strong><br>
        Professor of Information Security</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://s2lab.cs.ucl.ac.uk"><img src="../images/holding.png" alt="Jason Gray" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Jason Gray</strong><br>
             Doctoral Researcher (Visiting)
        </p>
    </div> 
    <div class="people administrative" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="mailto:i.gressel@ucl.ac.uk"><img src="../images/Isabelle.jpg" alt="Isabelle Gressel" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Isabelle Gressel</strong><br>
        UCL InfoSec Gender & Tech Lab Research Administrator</p>
    </div>
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www.cs.ucl.ac.uk/staff/J.Groth/"><img src="../images/jens.jpg" alt="SJens Groth" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Jens Groth</strong><br>
        Honorary</p>
    </div>
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/andreas.jpeg" alt="Andreas Gutmann" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Andreas Gutmann</strong><br>
             Honorary Lecturer
        </p>
    </div> 
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/majid.jpeg" alt="Majid Hatamian" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Majid Hatamian</strong><br>
             Honorary Senior Researcher Fellow
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/niamh-healy.jpg" alt="Niamh Healy" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Niamh Healy</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Hawra Hosseini-Milani" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Hawra Hosseini-Milani</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/marius-ilau.jpeg" alt="Marius Ilau" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Marius Ilau</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www0.cs.ucl.ac.uk/staff/M.Isaakidis"><img src="../images/holding.png" alt="Marios Isaakidis" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Marios Isaakidis</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/94090-madeleine-janickyj/about"><img src="../images/Maddy.jpg" alt="Madeleine Janickyj" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Madeleine Janickyj</strong><br>
        Research Fellow</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://philipp.jovanovic.io/"><img src="../images/philipp.png" alt="Philipp Jovanovic" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Philipp Jovanovic</strong><br>
        Professor of Information Security and MSc Information Securty Programme Director</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="ttps://s2lab.cs.ucl.ac.uk"><img src="../images/zeliang-mark-kan.jpg" alt="Zeliang Mark Kan" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Zeliang "Mark" Kan</strong><br>
             Doctoral Researcher (Visiting)
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/george-kappos.jpg" alt="George Kappos" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>George Kappos</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/Alireza.jpg" alt="Alireza Kavousi" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Alireza Kavousi</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="FEmmanouil Koulas" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Emmanouil Koulas</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/94089-nikolaos-koukopoulos"><img src="../images/Niko.jpg" alt="Nikolaos Koukopoulos" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Nikolaos Koukopoulos</strong><br>
        Research Fellow</p>
    </div>
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://privacyink.org/"><img src="../images/susanlandau.jpg" alt="Susan Landau" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Susan Landau</strong><br>
        Honorary</p>
    </div>
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://en.wikipedia.org/wiki/Ben_Laurie"><img src="../images/benlaurie.jpg" alt="Ben Laurie" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Ben Laurie</strong><br>
            Honorary
        </p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://smeiklej.com/"><img src="../images/sarah.jpg" alt="Sarah Meiklejohn" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Sarah Meiklejohn</strong><br>
        Professor of Cryptography and Security (PT) and Staff Research Scientist at Google UK</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Chizzy Meka" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Chizzy Meka</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/lisamalki.jpeg" alt="Lisa Mekioussa Malki" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Lisa Mekioussa Malki</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/michaelides.jpg" alt="Nadine Michaelides" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Nadine Michaelides</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/Reza.jpg" alt="FReza Moqadasi" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Reza Moqadasi</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://murdoch.is/"><img src="../images/steven.jpg" alt="Steven Murdoch" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Steven Murdoch</strong><br>
        Professor of Security Engineering, Head of Group, and Royal Society University Research Fellow</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://mohammadnaseri.github.io/"><img src="../images/Mohammad.jpg" alt="Mohammad Naseri" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Mohammad Naseri</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/99051-catherine-o%27brien"><img src="../images/cathy.jpg" alt="Catherine O'Brien" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Catherine O'Brien</strong><br>
        Research Fellow</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/ordekian.jpg" alt="Marilyne Ordekian" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Marilyne Ordekian</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/kart-padur.jpg" alt="Kärt Padur" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Kärt Padur</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://uclisec.github.io/people/simon_parkin/"><img src="../images/simonparkin.png" alt="Simon Parkin" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Simon Parkin</strong><br>
            Honorary
        </p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://s2lab.cs.ucl.ac.uk"><img src="../images/feargus.jpg" alt="Feargus Pendlebury" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Feargus Pendlebury</strong><br>
             Doctoral Researcher (Visiting)
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/illaria-pia-la-torre.jpg" alt="Ilaria Pia Del Torre" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Ilaria Pia Del Torre</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/100070-fabio-pierazzi"><img src="../images/fabio.jpg" alt="Fabio Pierazzi" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Fabio Pierazzi</strong><br>
             Associate Professor 
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www0.cs.ucl.ac.uk/staff/D.Pym/"><img src="../images/david.jpg" alt="David Pym" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>David Pym</strong><br>
        Professor of Information, Logic, and Security</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://twitter.com/demelza_r"><img src="../images/reaver.jpg" alt="Demelza Luna Reaver" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Demelza Luna Reaver</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://dri.st"><img src="../images/dan-ristrea.jpg" alt="Dan Ristea" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Dan Ristea</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://nuuralifahroslan.com"><img src="../images/alifa.jpeg" alt="Nurr Alifah Roslan (Alifa)" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Nuur Alifah Roslan (Alifah)</strong><br>
        Visiting Research Fellow</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://uclisec.github.io/people/m_angela_sasse/"><img src="../images/angela.jpg" alt="M. Angela Sasse" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>M. Angela Sasse</strong><br>
        Professor of Human-Centred Technology (PT), and Professor at Ruhr-University Bochum</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www.maria-a-schett.net/"><img src="../images/Mariaschett.jpg" alt="Maria Schett" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Maria Schett</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people administrative" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="mailto:silpa.shah@ucl.ac.uk"><img src="../images/holding.png" alt="Silpa Shah" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Silpa Shah</strong><br>
        UCL InfoSec Centre Administrator</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Karolina Skrivankova" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Karolina Skrivankova</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people honorary" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://seclab.bu.edu/people/gianluca/"><img src="../images/gianluca.png" alt="Gianluca Stringhini" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Gianluca Stringhini</strong><br>
            Honorary
        </p>
    </div>
    <div class="people academic" class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://www.leonietanczer.net/"><img src="../images/leonie.jpg" alt="Leonie Tanczer" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Leonie Tanczer</strong><br>
        Associate Professor and UKRI Future Leaders Fellow</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Guy Thompson" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Guy Thompson</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/arianna-trozze.jpg" alt="Arianna Trozze" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Arianna Trozze</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://mvasek.com/"><img src="../images/marie.jpg" alt="Marie Vasek" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Marie Vasek</strong><br>
        Lecturer of Information Security</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://antoinevendeville.github.io/"><img src="../images/andoine-vendeville.jpg" alt="Antoine Vendeville" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Antoine Vendeville</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://www.privacurity.com/"><img src="../images/Mark.png" alt="Mark Warner" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Mark Warner</strong><br>
        Lecturer of Information Security</p>
    </div>
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Charles Westphal" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Charles Westphal</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people doctoral" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/holding.png" alt="Matthew Wixley" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Matthew Wixley</strong><br>
             Doctoral Researcher
        </p>
    </div> 
</div>



<div class="people alumni"><h2>Alumni</h2></div>
<div id="people" style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://killiandavitt.me"><img src="../images/killian.jpg" alt="Killian Davitt" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Killian Davitt</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://alexanderlhicks.com/"><img src="../images/alh-profile.jpeg" alt="Alexander Hicks" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Alexander Hicks</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www.haaroonyousaf.com/"><img src="../images/holding.png" alt="Haaroon Yousaf" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Haaroon Yousaf</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="" alt="" style="width: 100%; border-radius: 10px;"></a>
        <p><strong></strong><br>
        </p>
    </div>
    <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/henry-skeotch.jpg" alt="Henry Skeoch" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Henry Skeoch</strong><br>
             Doctoral Researcher
        </p>
    </div> 
    <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://laurenscott.dev"><img src="../images/lauren-scott.jpg" alt="Lauren Scott" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Lauren Scott</strong><br>
             Doctoral Researcher (Visiting)
        </p>
    </div> 
        <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://mariascrs.github.io/"><img src="../images/maria-santos.jpg" alt="Maria Santos" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Maria Santos</strong><br>
             Doctoral Researcher
        </p>
    </div> 
        <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/Lilly.jpg" alt="Lilly Neubauer" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Lilly Neubauer</strong><br>
             Doctoral Researcher
        </p>
    </div> 
        <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/evripidou.jpg" alt="Stefanos Evripi" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Stefanos Evripi</strong><br>
             Doctoral Researcher
        </p>
    </div> 
        <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://antonispapasavva.github.io/"><img src="../images/antonis-papasavva.jpg" alt="Antonis Papasavva" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Antonis Papasavva</strong><br>
             Doctoral Researcher
        </p>
    </div> 
        <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://alefstrat.github.io/"><img src="../images/efstratiou.png" alt="Alexandros Efstratiou" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Alexandros Efstratiou</strong><br>
             Doctoral Researcher
        </p>
    </div> 
     <div class="people alumni" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/gerard-buckley.jpg" alt="Gerard Buckley" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Gerard Buckley</strong><br>
             Doctoral Researcher
        </p>
    </div> 
</div>
