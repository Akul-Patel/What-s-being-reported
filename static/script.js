window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('myCoolButton').addEventListener('click', () => {
        // Everything you want to do when button is clicked below
        console.log('Button was clicked!'); // console.log is like printing in JS!
        const userText = document.getElementById('name').value;
        // alert(userText);
        const url = '/search/' + userText; // This should remind you of APIs in Python!
        window.fetch(url).then(response => response.json()) // So should JSON conversion!
            .then(data => { // .then will only run the function *once* the data is fetched from the internet
                console.log(data); // See what this logs!   
                var i;
                let getting_title = document.getElementById('title');
                
                while (getting_title.firstChild) {
                    getting_title.removeChild(getting_title.firstChild);
                }
                let newH1 = document.createElement('h7');
                newH1.textContent = "What's being reported about " + userText + "?";
                getting_title.append(newH1); 

                let getting_data = document.getElementById('new');
                
                while (getting_data.firstChild) {
                    getting_data.removeChild(getting_data.firstChild);
                }

                    
                for (i = 0; i < data["headlines"].length; i++) {
                    let newDiv = document.createElement('div');
                    let headlines = document.createElement('a');
                    let date = document.createElement('p');
                    var linkText = document.createTextNode(data['headlines'][i]);
                    let article = document.createElement('p');
                    // -----------------------
                    headlines.appendChild(linkText);
                    headlines.title = data['headlines'][i];
                    headlines.href = data['urls'][i];
                    // -----------------------
                    date.textContent = "(" + data['dates'][i] + ")"
                    article.textContent = data['snippets'][i];
                    newDiv.append(headlines, date, article);
                    getting_data.appendChild(newDiv); 
                }
            });
    });
};