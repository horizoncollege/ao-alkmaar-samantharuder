let speler1Keuze = '';
let speler2Keuze = '';
function play(speler, keuze) {
    if (speler === 'speler1') {
        speler1Keuze = keuze;
    } else {
        speler2Keuze = keuze;
    }
    if (speler1Keuze && speler2Keuze) {
        let resultaat = '';
        if (speler1Keuze === speler2Keuze) {
            resultaat = 'Gelijkspel!';
        } else if (
            (speler1Keuze === 'steen' && speler2Keuze === 'schaar') ||
            (speler1Keuze === 'papier' && speler2Keuze === 'steen') ||
            (speler1Keuze === 'schaar' && speler2Keuze === 'papier')
        ) {
            resultaat = 'Speler 1 wint!';
        } else {
            resultaat = 'Speler 2 wint!';
        }
        document.getElementById('resultaat').innerHTML = `Speler 1 koos ${speler1Keuze}
        , speler 2 koos ${speler2Keuze}. ${resultaat}`;
        speler1Keuze = '';
        speler2Keuze = '';
    }
}