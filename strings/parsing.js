"use strict";
function parseAndDisplayName(name) {
    let pos1 = name.indexOf(" ");
    let firstName = name.slice(0, pos1);
    let lastName = name.slice(pos1 + 1);
    console.log("Hello "+ name + "!" + " Your first name is " + firstName);
    console.log("Hello again!" + " Your last name is " + lastName);

}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");