const testData = {
    "Hello world!": "l",
    "How do you do?": "o",
    "One": "e",
    "Oops!": "o",
    "AAaooo!!!!": "a",
    "abe": "a",
    "Lorem ipsum dolor sit amet": "m",
    "Lorem ipsum dolor sit amet 0000000000000000000": "m",
    "Aaaaaaaaaaaaaaaa!!!!": "a",
    "Gregor then turned to look out the window at the dull weather.Nooooooooooo!!! Why!?!": "o",
    "fn;lsfndasl;f naslkdnlkasdnfslahwemwjkrjkl;zcmk;lzcdkcslksdkseewme,": "k",
    "fsbd": "b",
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.": "e",
    "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.": "e",
    "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz.": "i",
    "Z": "z",
    "a-z": "a",
    "A-Z": "a",
    "      d       ": "d",
    "i-d-d-q-d": "d",
    "12345,12345,12345 S 12345,12345": "s"
};

describe('Most wanted letter', function () {
    const assert = chai.assert;

    for(let testCase in testData){
        it(`For '${testCase}' should be '${testData[testCase]}'`, function () {
            assert.equal(mostWanted(testCase), testData[testCase]);
        });
    }
});