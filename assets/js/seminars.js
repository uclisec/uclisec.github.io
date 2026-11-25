// Seminars page only: turn each pair of "Abstract" / "Bio" <details> toggles
// into a fixed row of tab buttons with one shared panel underneath, so the
// buttons never move when one of them is opened. Without JavaScript the
// original <details> toggles keep working.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#main li').forEach(function (li) {
    var toggles = Array.prototype.filter.call(li.children, function (el) {
      return el.matches('details.talk-info');
    });
    if (!toggles.length) return;

    var bar = document.createElement('span');
    bar.className = 'talk-tabs';
    var panel = document.createElement('div');
    panel.className = 'talk-panel';
    panel.hidden = true;

    toggles.forEach(function (details) {
      var summary = details.querySelector('summary');
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'talk-tab';
      button.textContent = summary.textContent;
      button.setAttribute('aria-expanded', 'false');

      var content = document.createElement('div');
      content.hidden = true;
      summary.remove();
      while (details.firstChild) content.appendChild(details.firstChild);
      panel.appendChild(content);

      button.addEventListener('click', function () {
        var wasOpen = button.getAttribute('aria-expanded') === 'true';
        bar.querySelectorAll('.talk-tab').forEach(function (b) {
          b.setAttribute('aria-expanded', 'false');
        });
        Array.prototype.forEach.call(panel.children, function (c) {
          c.hidden = true;
        });
        if (!wasOpen) {
          button.setAttribute('aria-expanded', 'true');
          content.hidden = false;
        }
        panel.hidden = wasOpen;
      });

      bar.appendChild(button);
    });

    toggles[0].before(bar);
    bar.after(panel);
    toggles.forEach(function (details) { details.remove(); });
  });
});
