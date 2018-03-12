/* Poistaa roskapostiestot sähköpostiosoitteista.
 * Tätä tiedostoa (roskaposti.js) sopii vapaasti kopioida ja muokata miten tykkää.
 * Alkuperäinen Kapsi Internet-käyttäjät ry:ltä, muokannut lisäksi Vaasa Hacklab ry
 */

function removeTags(nodes, className) {
    for (var i = 0; i < nodes.length; i++)
    {
        if (nodes[i].className == className)
        {
            nodes[i].parentNode.removeChild(nodes[i]);
        }
    }
}

function fixMailto(nodes) {
    for (var i = 0; i < nodes.length; i++)
    {
        if (nodes[i].href.substr(0,7) == 'mailto:')
        {
            nodes[i].href = nodes[i].href.replace('.poistatama', '');
            nodes[i].href = nodes[i].href.replace('poistatama.', '');
            nodes[i].href = nodes[i].href.replace('.POISTATAMA', '');
            nodes[i].href = nodes[i].href.replace('POISTATAMA.', '');
        }
    }
}

function removeSpamBlock() {
    removeTags(document.getElementsByTagName('span'), 'roskaposti');
    fixMailto(document.getElementsByTagName('a'));
}

document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     	removeSpamBlock();
   }
 }

document.addEventListener('DOMContentLoaded', function() {
        removeSpamBlock();
});
