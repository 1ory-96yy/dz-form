const quizForm = document.getElementById('quizForm');
        const resultDiv = document.getElementById('result');
        const correctAnswers = {
            q1: 'a',
            q2: 'a',
            q3: 'a'
        };
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let score = 0;
            const userAnswers = new FormData(quizForm);
            for (const [question, answer] of userAnswers.entries()) {
                if (answer === correctAnswers[question]) {
                    score++;
                }
            }
            resultDiv.textContent = `Ваш результат: ${score} з ${Object.keys(correctAnswers).length}`;
        });