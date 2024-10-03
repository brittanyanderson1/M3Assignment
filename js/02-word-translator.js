let languageCode = prompt('Enter on of the following language codes: en, es, de, fr.').toLowerCase();
if (languageCode === 'en') {
    console.log('Hello, World!');
} else if (languageCode === 'es') {
    console.log('Hola, Mundo!');
} else if (languageCode === 'de') {
    console.log('Hallo, Welt!');
} else if (languageCode === 'fr') {
    console.log('Bonjour, le Monde!');
} else {
    console.log('Invalid code. Please try again.');
}
