(() => {
	// Form Validation.
	{
		const form = document.querySelector('form');
		const inputs = form.querySelectorAll('input');


		form.addEventListener('submit', (e) => {
			e.preventDefault();
			let errorExists = false; {
				inputs.forEach((input) => {
					const validationGroup = input.closest('.validation-group');
					const mmInput = document.querySelector('input[name="mm"]');
					if (input === mmInput) {
						input.setCustomValidity('');
						if (mmInput.value > 12) {
							alert('test');
							input.setCustomValidity('not valid');
						}
					}
					if (!input.validity.valid) {
						input.classList.add('error');
						validationGroup.classList.add('error');
						errorExists = true;
					}
				});
			}
			if (!errorExists) {
				const mainGrid = document.querySelector('.main-grid');
				mainGrid.classList.add('thank-you');
			}

		});

		inputs.forEach((input) => {
			input.addEventListener('input', (e) => {
				input.classList.remove('error');
				const validationGroup = input.closest('.validation-group');
				validationGroup.classList.remove('error');
			});

			input.addEventListener('focus', (e) => {
				input.classList.remove('error');
				const validationGroup = input.closest('.validation-group');
				validationGroup.classList.remove('error');
			});
		});
	}


	// Continue Button click handler.
	{
		const continueButton = document.querySelector('.continue-button');
		continueButton.addEventListener('click', (e) => {
			location.reload();
		});
	}
})();