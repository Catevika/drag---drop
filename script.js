const fill = document.querySelector('.fill');

const empties = document.querySelectorAll('.empty');

const dragStart = () => {
	fill.classList.add('hold');
	setTimeout(() => (fill.classList = 'invisible'), 0);
};

const dragEnd = () => {
	fill.classList.add('fill');
};

const dragOver = (e) => {
	e.preventDefault();
};

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
	const dragEnter = (e) => {
		e.preventDefault();
		empty.classList.add('hovered');
	};

	const dragLeave = () => {
		empty.classList.remove('hovered');
	};

	const dragDrop = () => {
		empty.classList = 'empty';
		empty.appendChild(fill);
	};

	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
});
