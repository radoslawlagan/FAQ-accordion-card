const faq = document.querySelectorAll('.faq');
const question = document.querySelectorAll('.faq__question');
const answer = document.querySelectorAll('.faq__answer');

// console.log(faq);
// console.log(question);
// console.log(answer);

const roll = () => {
	question.classList.toggle('active');
	answer.classList.toggle('hidden');
};

faq.addEventListener('click', roll);
