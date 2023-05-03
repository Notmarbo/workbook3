"use strict";
function parseAndDisplayName(name) {
    let pos1 = name.indexOf(" ");
    let pos2 = name.lastIndexOf(" ");
    let firstName = name.slice(0, pos1);
    let lastName = name.slice(pos2 + 1);
    console.log("Your first name is " + firstName);
    console.log("Your last name is " + lastName);

}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");