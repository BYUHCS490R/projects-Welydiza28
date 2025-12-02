document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const favgame = document.getElementById("favgame").value;
        const age = document.getElementById("age").value;

        if (!name) {
            alert("Please provide your name!");
            return;
        }

        if (!email) {
            alert("Please provide your email!");
            return;
        }

        if (!favgame) {
            alert("Please provide your favorite game!");
            return;
        }

        if (!age || age < 1 || age > 100) {
            alert("Please enter a valid age between 1 and 100!")
            return;
        }

        const data = {
            name: name,
            email: email,
            favgame: favgame,
            age: age
        }

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("myForm").innerHTML = "";
            } else if (xhr.readyState === 4) {
                alert('Error submitting form.');
            }
        };
        xhr.send(JSON.stringify(data))
        console.log(data);;
    });