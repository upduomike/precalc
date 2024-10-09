function submitTest() {
    // Retrieve form data
    const form = document.getElementById('test-form');
    const formData = new FormData(form);

    // Score the multiple-choice questions
    const answers = {
        q1: 'c', // Correct answer for question 1
        q2: 'a', // Correct answer for question 2
        // Add other answers accordingly
    };

    let score = 0;

    // Evaluate multiple-choice questions
    for (let [key, value] of formData.entries()) {
        if (answers[key] && value === answers[key]) {
            score += 4; // Award 4 points per correct answer
        }
    }

    // Display score
    alert(`Your score for the multiple-choice section is: ${score}`);

    // Send free-response answers to GPT for evaluation
    // Collect the free-response answers
    const freeResponseAnswers = {};
    for (let [key, value] of formData.entries()) {
        if (key.startsWith('q') && !answers[key]) {
            freeResponseAnswers[key] = value;
        }
    }

    // Send free-response answers to a backend (optional for advanced users) or process manually
    console.log(freeResponseAnswers);

    // For simplicity, display a message asking students to await their score
    alert('Your free-response answers have been submitted. Please await feedback.');
}
