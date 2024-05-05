function skillsMember(){
     // Array of compliments
     const compliments = [
        "You're incredibly talented!",
        "You have a fantastic skillset!",
        "Your work is always top-notch!",
        "You're a valuable asset to the team!",
        "You're always willing to learn and improve!",
        "You have a great eye for detail!",
        "Your creativity knows no bounds!",
        "You bring so much positivity to the group!",
        "You're a real problem-solver!",
        "Your dedication is truly inspiring!"
    ];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * compliments.length);

    // Return a random compliment
    return compliments[randomIndex];
}