function lajkolas(id) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var response = JSON.parse(this.responseText);
            document.getElementById("tetszikDb_" + id).innerHTML = response.tdb;
        }
    });

    xhr.open("PATCH", "https://localhost:7193/api/Vicc/" + id + "/like");
    xhr.send();
}

function dislajkolas(id) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var response = JSON.parse(this.responseText);
            document.getElementById("nemtetszikDb_" + id).innerHTML = response.tdb;
        }
    });

    xhr.open("PATCH", "https://localhost:7193/api/Vicc/" + id + "/dislike");
    xhr.send();
}
