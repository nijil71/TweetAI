from flask import Flask, render_template, request
import openai

app = Flask(__name__)

# Set up your OpenAI API credentials
openai.api_key = 'YOUR_API_KEY'


# Create the main route for the web app
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/generate', methods=['POST'])
def generate_tweet():
    prompt = request.form['prompt']
    if not prompt:
        return render_template('index.html', error='Please enter a prompt.')

    # Call the OpenAI API to generate the tweet
    try:
        tweet = generate_tweet_text(prompt)

    except Exception as e:
        return render_template('index.html', error='An error occurred. Please try again later.')

    return render_template('index.html', prompt=prompt, tweet=tweet)


def generate_tweet_text(prompt):
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=f'write a tweet about "{prompt}"\n\nTweet: ',
        max_tokens=80,
    )

    tweet = response.choices[0].text.strip()

    return tweet


@app.route('/aboutus', methods=['GET', 'POST'])
def aboutus():
    return render_template('aboutus.html')


if __name__ == '__main__':
    app.run(debug=True)
