const ruleData = {
    1: {
        title: "STRIKE FIRST",
        text: "In Cobra Kai, striking first gives you control. Don’t wait — initiative is power."
    },
    2: {
        title: "STRIKE HARD",
        text: "Strike hard — that way, doubt disappears. Winning isn’t enough; you have to dominate."
    },
    3: {
        title: "NO MERCY",
        text: "Your enemy won’t show mercy. Cobra Kai doesn’t weaken, doesn’t stop, and doesn’t forgive."
    },
    4: {
        title: "FEAR DOES NOT EXIST IN THIS DOJO",
        text: "Fear blinds you. In Cobra Kai, we train to erase it and act without hesitation."
    },
    5: {
        title: "PAIN DOES NOT EXIST IN THIS DOJO",
        text: "Pain is an illusion. In Cobra Kai, we learn to dominate it and turn it into strength. The body adapts — willpower leads."
    },
    6: {
        title: "DEFEAT DOES NOT EXIST IN THIS DOJO",
        text: "Defeat exists only if you accept it. In Cobra Kai, even when you fall, you rise harder and more determined. Failure is not an option."
    },
    7: {
        title: "SENSEI AND STUDENT ARE THE ONLY PRONOUNS IN THIS DOJO",
        text: "The dojo is hierarchy, respect, and discipline. Here, there are no empty titles — only two roles matter: the one who teaches and the one who learns. Nothing else matters."
    },
    8: {
        title: "ANYONE WHO CONFRONTS YOU IS THE ENEMY",
        text: "When someone crosses your path, they’re not an obstacle — they’re a challenge. In the dojo, in the streets, or in competition, we respond with conviction. We never back down."
    }
};


document.querySelectorAll('.rule-card').forEach(card => {
    card.addEventListener('click', () => {
        const ruleId = card.getAttribute('data-rule');
        document.getElementById('modal-title').innerText = ruleData[ruleId].title;
        document.getElementById('modal-text').innerText = ruleData[ruleId].text;

        document.getElementById('modal-bg').style.display = "block";
        document.getElementById('modal').style.display = "block";
    });
});

// Cerrar modal
document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-bg').style.display = "none";
    document.getElementById('modal').style.display = "none";
});
document.getElementById('modal-bg').addEventListener('click', () => {
    document.getElementById('modal-bg').style.display = "none";
    document.getElementById('modal').style.display = "none";
});

