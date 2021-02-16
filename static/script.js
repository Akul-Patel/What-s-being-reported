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
                
                let getting_data = document.getElementById('new');
                
                while (getting_data.firstChild) {
                    getting_data.removeChild(getting_data.firstChild);
                }
                    
                for (i = 0; i < data["headlines"].length; i++) {
                    let newDiv = document.createElement('div');
                    let headlines = document.createElement('b');
                    let article = document.createElement('p');
                    headlines.textContent = data['headlines'][i].link(data['urls'][i]) + "(" + data['dates'][i] + ")";
                    newDiv.appendChild(headlines);
                    article.textContent = data['snippets'][i];
                    newDiv.append(headlines, article);
                    getting_data.appendChild(newDiv); 
                }
            });
    });
};