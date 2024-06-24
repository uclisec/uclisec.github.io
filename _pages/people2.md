---
title: "People"
permalink: /people2/
author_profile: true
---

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

<div class="people academic"><h2>Academic</h2></div>
<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://www.ucl.ac.uk/computer-science/people/professor-madeline-carr"><img src="../images/madeline2.jpg" alt="Madeline Carr" style="width: 100%; border-radius: 10px;"></a><br>
        <p><strong>Madeline Carr</strong><br>
        Professor of Global Politics and Cyber Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://www.tristancaulfield.com/"><img src="../images/tristan2.jpg" alt="Tristan Caulfield" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Tristan Caulfield</strong><br>
        Associate Professor of Information Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://scholar.google.com/citations?user=oWT7fIYAAAAJ&hl=en/"><img src="../images/lorenzo.jpg" alt="Lorenzo Cavallaro" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Lorenzo Cavallaro</strong><br>
        Professor of Systems Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www0.cs.ucl.ac.uk/staff/G.Danezis/"><img src="../images/george.jpg" alt="George Danezis" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>George Danezis</strong><br>
        Professor of Security and Privacy Engineering (PT) and Chief Scientist at Mysten Labs</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://arthurgervais.com/"><img src="../images/Arthur.jpg" alt="Arthur Gervais" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Arthur Gervais</strong><br>
        Associate Professor of Information Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://philipp.jovanovic.io/"><img src="../images/philipp.png" alt="Philipp Jovanovic" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Philipp Jovanovic</strong><br>
        Associate Professor of Information Security and MSc Information Securty Programme Director</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://smeiklej.com/"><img src="../images/sarah.jpg" alt="Sarah Meiklejohn" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Sarah Meiklejohn</strong><br>
        Professor of Cryptography and Security (PT) and Staff Research Scientist at Google UK</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="http://www0.cs.ucl.ac.uk/staff/D.Pym/"><img src="../images/david.jpg" alt="David Pym" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>David Pym</strong><br>
        Professor of Information, Logic, and Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://murdoch.is/"><img src="../images/steven.jpg" alt="Steven Murdoch" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Steven Murdoch</strong><br>
        Professor of Security Engineering, Head of Group, and Royal Society University Research Fellow</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://uclisec.github.io/people/m_angela_sasse/"><img src="../images/angela.jpg" alt="M. Angela Sasse" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>M. Angela Sasse</strong><br>
        Professor of Human-Centred Technology (PT), and Professor at Ruhr-University Bochum</p>
    </div>
    <div class="people academic" class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://www.leonietanczer.net/"><img src="../images/leonie.jpg" alt="Leonie Tanczer" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Leonie Tanczer</strong><br>
        Associate Professor and UKRI Future Leaders Fellow</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://mvasek.com/"><img src="../images/marie.jpg" alt="Marie Vasek" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Marie Vasek</strong><br>
        Lecturer of Information Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://www.privacurity.com/"><img src="../images/Mark.jpg" alt="Mark Warner" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Mark Warner</strong><br>
        Lecturer of Information Security</p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="" alt="" style="width: 100%; border-radius: 10px;"></a>
        <p><strong></strong><br>
        </p>
    </div>
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="" alt="" style="width: 100%; border-radius: 10px;"></a>
        <p><strong></strong><br>
        </p>
    </div> 
    <div class="people academic" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="" alt="" style="width: 100%; border-radius: 10px;"></a>
        <p><strong></strong><br>
        </p>
    </div> 
</div>

<div class="people researcher"><h2>Researchers</h2></div>
<div id="people" style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="../images/val.jpg" alt="Valeria Minero Abreu" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Valeria Minero Abreu</strong><br>
        Senior Research Fellow</p>
    </div>
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/94090-madeleine-janickyj/about"><img src="../images/Maddy.jpg" alt="Madeleine Janickyj" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Madeleine Janickyj</strong><br>
        Research Fellow</p>
    </div>
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/94089-nikolaos-koukopoulos"><img src="../images/Niko.jpg" alt="Nikolaos Koukopoulos" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Nikolaos Koukopoulos</strong><br>
        Research Fellow</p>
    </div>
    <div class="people researcher" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="https://profiles.ucl.ac.uk/99051-catherine-o%27brien"><img src="../images/cathy.jpg" alt="Catherine O'Brien" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Catherine O'Brien</strong><br>
        Research Fellow</p>
    </div>
</div>


<div class="people administrative"><h2>Administrative Staff</h2></div>
<div id="people" style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <div class="people administrative" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="mailto:s.bottomley@ucl.ac.uk"><img src="../images/holding.png" alt="Samantha Bottomley" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Samantha Bottomley</strong><br>
        MSc Information Security Administrator</p>
    </div>
    <div class="people administrative" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="mailto:silpa.shah@ucl.ac.uk"><img src="../images/holding.png" alt="Silpa Shah" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Silpa Shah</strong><br>
        UCL InfoSec Centre Administrator</p>
    </div>
    <div class="people administrative" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href="mailto:i.gressel@ucl.ac.uk"><img src="../images/holding.png" alt="Isabelle Gressel" style="width: 100%; border-radius: 10px;"></a>
        <p><strong>Isabelle Gressel</strong><br>
        UCL InfoSec Gender & Tech Lab Research Administrator</p>
    </div>
    <div class="people administrative" style="flex: 1 0 21%; margin: 10px; text-align: center;">
        <a href=""><img src="" alt="" style="width: 100%; border-radius: 10px;"></a>
        <p><strong></strong><br>
        </p>
    </div>
</div>


## Doctoral Researchers

- [Mohamed Abouhashem](https://s2lab.cs.ucl.ac.uk), Visitor
- [Sharad Agarwal](https://sharad1126.github.io/)
- Daniel Blackwell
- Filippo Blancato
- Sergi Bray
- Gerard Buckley
- Thomas Cattermole
- [Jacopo Cortellazzi](https://s2lab.cs.ucl.ac.uk), Visitor
- Ahana Datta
- [Killian Davitt](https://killiandavitt.me)
- Kyriacos Demetriou
- [Giulio De Pasquale](https://s2lab.cs.ucl.ac.uk), Visitor
- Jennifer Dwyer-Joyce
- [Alexandros Efstratiou](https://alefstrat.github.io/)
- Aliai Eusebi
- Stefanos Evripi
- [Georgi Ganev](https://ganevgv.github.io/)
- [Jason Gray](https://s2lab.cs.ucl.ac.uk), Visitor
- Niamh Healy
- Hawra Hosseini-Milani
- Marius Ilau
- [Marios Isaakidis](http://www0.cs.ucl.ac.uk/staff/M.Isaakidis)
- [Zeliang "Mark" Kan](https://s2lab.cs.ucl.ac.uk), Visitor
- George Kappos
- Alireza Kavousi
- Emmanouil Koulas
- [Demelza Luna Reaver](https://twitter.com/demelza_r)
- Chizzy Meka
- Nadine Michaelides
- Reza Moqadasi
- [Mohammad Naseri](https://mohammadnaseri.github.io/)
- Lilly Neubauer
- Marilyne Ordekian
- Kärt Padur
- [Antonis Papasavva](https://antonispapasavva.github.io/)
- [Feargus Pendlebury](https://s2lab.cs.ucl.ac.uk), Visitor
- Ilaria Pia Del Torre
- [Dan Ristea](https://dri.st)
- [Maria Santos](https://mariascrs.github.io/)
- [Maria Schett](http://www.maria-a-schett.net/)
- [Lauren Scott](https://laurenscott.dev/), Visitor
- Henry Skeoch
- Karolina Skrivankova
- Guy Thompson
- Arianna Trozze
- [Antoine Vendeville](https://antoinevendeville.github.io/)
- Charles Westphal
- Matthew Wixley
- [Alexander Hicks](https://alexanderlhicks.com/)
- [Haaroon Yousaf](http://www.haaroonyousaf.com/)

### Honorary and Visiting Members
- [Jens Groth](http://www.cs.ucl.ac.uk/staff/J.Groth/)
- [Gus Hosein](https://privacyinternational.org/people/95/gus-hosein)
- [Susan Landau](https://privacyink.org/)
- [Ben Laurie](https://en.wikipedia.org/wiki/Ben_Laurie)
- [Simon Parkin](https://uclisec.github.io/people/simon_parkin/)
- [Gianluca Stringhini](https://seclab.bu.edu/people/gianluca/)

