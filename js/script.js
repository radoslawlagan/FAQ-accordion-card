const faqs = document.querySelectorAll('.faq');
const questions = document.querySelectorAll('.faq__question');
const answers = document.querySelectorAll('.faq__answer');
const arrows = document.querySelectorAll('.faq__img');

const roll = (element) => {
	const question = [...element.children].filter((el) =>
		el.classList.contains('faq__question')
	)[0];
	const answer = [...element.children].filter((el) =>
		el.classList.contains('faq__answer')
	)[0];
	const arrow = [...element.children].filter((el) =>
		el.classList.contains('faq__img')
	)[0];

	if (element.classList.contains('faq')) {
		question.classList.toggle('active');
		answer.classList.toggle('hidden');
		arrow.classList.toggle('rotate');
	}
};

faqs.forEach((faq) =>
	faq.addEventListener('click', function () {
		roll(this);
	})
);

// OLD SOLUTION = OPENS ALL FAQ'S AT SAME TIME //

// const roll = () => {
// 	questions.forEach((question) => question.classList.toggle('active'));
// 	answers.forEach((answer) => answer.classList.toggle('hidden'));
// 	arrows.forEach((arrow) => arrow.classList.toggle('rotate'));
// };

// faqs.forEach((faq) => faq.addEventListener('click', roll));
