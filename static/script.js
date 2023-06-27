function tweetQuote() {
    const quote = document.getElementById('tweet').innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterUrl, '_blank');
}
function copyQuote() {
            const quote = document.getElementById('tweet').innerText;
            const textArea = document.createElement('textarea');
            textArea.value = quote;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
            Swal.fire({
        title: 'Tweet Copied!',
        text: 'The tweet has been copied to the clipboard.',
        icon: 'success',
        confirmButtonColor: '#38a1f3',
        timer: 3000, // Duration of the alert in milliseconds (3 seconds)
        toast: true,
        position: 'top-end',
        showConfirmButton: false
    });
        }
        let currentPrompt = '';

function refreshTweet() {
    const promptInput = document.getElementById('prompt');
    const promptValue = promptInput.value.trim();

    // Check if the prompt is empty
    if (promptValue === '') {
        // Display an alert or perform any desired action
        alert('Please enter a prompt before refreshing.');
        return;
    }

    // Save the current prompt
    currentPrompt = promptValue;

    // Clear the current tweet
    const tweetContainer = document.querySelector('.tweet-container');
    tweetContainer.innerHTML = '';

    // Reset the prompt input field value
    promptInput.value = currentPrompt;
    
    document.querySelector('form').submit();
}
