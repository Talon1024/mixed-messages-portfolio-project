// Generate a random positive whole number between min and max inclusive.
//
// min - The minimum value
// max - The maximum value
function randomInteger(min, max) {
    // The + 1 is needed because of the Math.floor operation
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Return a random item from the array.
//
// array - The array to get the random item from.
function randomItem(array) {
    const max = array.length - 1;
    return array[randomInteger(0, max)];
}

// Ensure the piece of text begins with a capital letter, and ends with a
// ending punctuation mark. Returns the modified piece of text.
//
// text - the piece of text to modify
function makeSentence(text) {
    const endPunct = ['.', '!', '?'];
    const addPeriod = endPunct.some((mark) => text.endsWith(mark)) ? '' : '.';
    return text[0].toUpperCase() + text.substring(1) + addPeriod;
}

// Ask the eight ball a question about something. Generates a random response.
// Returns the response as a string.
//
// questionSubject - The subject of the question
// questionTopic - What about the subject is being asked
function eightBall(questionSubject, questionTopic) {
    const responsePieces = {
        prefix: ['it is', 'it is not'],
        middle: ['likely that', 'unlikely that', 'possible that'],
        suffix: ['is', 'is not'],
        random: ['don\'t look at me like that!', 'what are you talking about?'],
    };

    // A quick and dirty function to get a random string from the response
    // piece array.
    const getBrandom = (pee) => randomItem(responsePieces[pee]);
    // Replace 'my' with 'your' in case questionSubject contains 'my'
    questionSubject = questionSubject.replace('my', 'your');

    let response;
    if (randomInteger(1, 5) === 1) {
        response = getBrandom('random');
    } else {
        response = `${getBrandom('prefix')} ${getBrandom('middle')} ${questionSubject} ${getBrandom('suffix')} ${questionTopic}`;
    }

    return makeSentence(response);
}

// An example of how to use this code
console.log(eightBall('the author of this code', 'an absolute idiot'));
