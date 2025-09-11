document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM is loaded");
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const fullText = button.parentElement.nextElementSibling;
        const readLessBtn = fullText.querySelector('.read-less');
        fullText.classList.toggle('hidden');
        button.parentElement.classList.toggle('hidden');
        readLessBtn.classList.toggle('hidden');
    });
});

document.querySelectorAll('.read-less').forEach(button => {
    button.addEventListener('click', () => {
        const fullText = button.parentElement;
        const truncatedText = fullText.previousElementSibling;
        fullText.classList.toggle('hidden');
        truncatedText.classList.toggle('hidden');
        button.classList.toggle('hidden');
    });
});
