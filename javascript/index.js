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
    { Name: "Duneya" },
    { Name: "Rosa" },
    { Name: "Demi" },
    { Name: "Ralph" },
    { Name: "Youssra" },
    { Name: "Marwu" },
    { Device: "laptop" },
    { Device: "tablet" },
    { Device: "phone" }

];
// get search bar element
// for (var i = 0; i < 3; i++) {

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

// };

let ULIDLaptop = document.getElementById('laptopsearchresult');

for (var i = 0; i < ListOfNames.length; i++) {


    let LiItemsLaptop = document.createElement('li');
    LiItemsLaptop.setAttribute("class", "name");
    LiItemsLaptop.innerHTML = ListOfNames[i].Name;


    ULIDLaptop.appendChild(LiItemsLaptop);
};




let ULIDTablet = document.getElementById('tabletsearchresult');

for (var i = 0; i < ListOfNames.length; i++) {
    let LiItemsTablet = document.createElement('li');
    LiItemsTablet.setAttribute("class", "name");
    LiItemsTablet.innerHTML = ListOfNames[i].Name;

    ULIDTablet.appendChild(LiItemsTablet);

}




let ULIDPhone = document.getElementById('phonesearchresult');

for (var i = 0; i < ListOfNames.length; i++) {
    let LiItemsPhone = document.createElement('li');
    LiItemsPhone.setAttribute("class", "name");
    LiItemsPhone.innerHTML = ListOfNames[i].Name;

    ULIDPhone.appendChild(LiItemsPhone);


}