// Generate a random positive whole number between min and max inclusive.
//
// min - The minimum value
// max - The maximum value
function randomInteger(min, max) {
    // The + 1 is needed because of the Math.floor operation
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
        middle: ['likely that', 'unlikely that'],
        suffix: [''],
        random: ['don\'t look at me like that!', 'what are you talking about?'],
    };
    // Replace 'my' with 'your' in case questionSubject contains 'my'
    questionSubject = questionSubject.replace('my', 'your');

    let response;
    if (randomInteger(1, 5) === 1) {
        response = responsePieces.random[randomInteger(0, responsePieces.random.length - 1)];
    } else {
        response = nm;
    }

    return makeSentence(response);
}
