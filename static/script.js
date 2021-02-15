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
                for (i = 0; i < data["headlines"].length; i++) {
                    var tag = document.createElement("p");
                    var text = document.createTextNode(data["headlines"][i] + data["dates"][i]);
                    tag.appendChild(text);
                    var element = document.getElementById("new");
                    element.appendChild(tag);
                    var tag2 = document.createElement("p");
                    var text2 = document.createTextNode(data["snippets"][i]);
                    tag2.appendChild(text2);
                    var element2 = document.getElementById("new2");
                    element2.appendChild(tag2);
                }
            });
    });
};