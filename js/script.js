const faqs = document.querySelectorAll('.faq');
const questions = document.querySelectorAll('.faq__question');
const answers = document.querySelectorAll('.faq__answer');
const arrows = document.querySelectorAll('.faq__img');

// console.log(faq);
// console.log(question);
// console.log(answer);

const roll = (e) => {
	questions.forEach((question) => question.classList.toggle('active'));
	answers.forEach((answer) => answer.classList.toggle('hidden'));
	arrows.forEach((arrow) => arrow.classList.toggle('rotate'));
};

faqs.forEach((faq) => faq.addEventListener('click', roll));
