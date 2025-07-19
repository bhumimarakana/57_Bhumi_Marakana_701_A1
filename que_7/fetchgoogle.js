const fetch = require('node-fetch');

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');

    const html = await response.text();

    console.log('Google Page Content (first 500 chars):');
    console.log(html.substring(0, 500));
  } catch (error) {
    console.error('Error fetching page:', error.message);
  }
}
fetchGoogleHomePage();
