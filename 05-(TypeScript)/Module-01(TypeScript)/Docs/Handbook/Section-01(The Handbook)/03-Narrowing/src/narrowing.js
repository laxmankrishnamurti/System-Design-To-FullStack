function isEligibleForVoting(age) {
    if (typeof age === "number") {
        if (age >= 18) {
            console.log("Yes, Your are eligible for voting. You can vote. ");
        }
        else {
            console.log("Oops! since you are a teenager so you can't vote.");
        }
    }
    else {
        console.log("Voter age is", age);
    }
}
isEligibleForVoting("18");
