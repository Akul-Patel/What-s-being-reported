import os
from flask import Flask, render_template
from nyt import get_article_data

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def hello_world():
    """ Returns root endpoint HTML """

    keyword_query = 'Robinhood' # Change it to something you're interested in!
    article_data = get_article_data(keyword_query)

    return render_template(
        "index.html",
        topic=keyword_query,
        headlines=article_data['headlines'],
        snippets=article_data['snippets'],
        dates=article_data['dates']
    )
@app.route('/search/<user_text>')
def user_text(user_text):
    # show the user profile for that user
    keyword_query = user_text # Change it to something you're interested in!
    article_data = get_article_data(keyword_query)
    headlines=article_data['headlines']
    snippets=article_data['snippets']
    dates=article_data['dates']
    return {
        'headlines': headlines, # headlines is an array of strings, see how we got this array in our other route!
        'snippets': snippets,
        'dates': dates,
    }

app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 8080)),
    debug=True
)
