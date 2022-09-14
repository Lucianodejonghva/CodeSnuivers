// get search bar element
const searchInput = document.getElementById("studentsearchbar");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("name");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();

        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.display = "block";
        } else {
            // no match, don't display name
            nameElement.style.display = "none";
        }
    }
});


var ListOfNames = [
    { Name: "Stefan" },
    { Name: "Tobias" },
    { Name: "Ivar" },
    { Name: "Suus Ten V." },
    { Name: "Krijn" },
    { Name: "Luciano" },
    { Name: "Maaike" },
    { Name: "Nazneen" },
    { Name: "Rayan" },
    { Name: "Rosa" },
    { Name: "Sascha" },
    { Name: "Suus H." },
    { Name: "Gijs" },
    { Name: "Stefan" },
    { Name: "Duneya" },
    { Name: "Rosa" },
    { Name: "Demi" },
    { Name: "Ralph" },
    { Name: "Youssra" },
    { Name: "Marwu" },
    { Name: "Tobias" }

];

let ULID = document.getElementById('laptopsearchresult');

for (var i = 0; i < ListOfNames.length; i++) {


    let LiItems = document.createElement('li');
    LiItems.setAttribute("class", "name");
    LiItems.innerHTML = ListOfNames[i].Name;

    ULID.appendChild(LiItems);

};