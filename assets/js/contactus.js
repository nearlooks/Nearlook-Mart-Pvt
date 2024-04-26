document.getElementById('subscribeForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  // Your Mailchimp API key and list ID
  const apiKey = 'fa14cad4b56657af5d79c241fbca61c7-us21';
  const listId = 'ec857d296e';

  // Mailchimp API endpoint with JSONP support
  const endpoint = `https://us21.api.mailchimp.com/3.0/lists/${listId}/members`;

  // Make API request using JSONP
  fetch(`${endpoint}?jsonp=true`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`anystring:${apiKey}`)}`
      },
      body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
      })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log(data);
      alert('Successfully subscribed!');
  })
  .catch(error => {
      console.error('Error subscribing:', error);
      alert('Subscription failed. Please try again.');
  });
});