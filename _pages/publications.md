---
title: "Recent publications"
permalink: /publications/
layout: single
---

# Recent publications

<script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
<style>
    iframe{
        background-color: transparent;
        border: 0px none transparent;
        padding: 0px;
        overflow: hidden;
    }
.pubtype {
  font-size: small;
  background-color: lightgray;
}

div.pub {
  margin-top: 10px;
}
</style>    
<div id="content" hx-get="https://infosec-internal.cs.ucl.ac.uk/publications/" hx-trigger="load" hx-select="#pubs" hx-swap="outerHTML"></div>
