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
				// Clear errors.
				{
					input.classList.remove('error');
					const validationGroup = input.closest('.validation-group');
					validationGroup.classList.remove('error');
				}

				_updateCardGraphics();


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
			location.href = location.href;
		});
	}


	function _updateCardGraphics() {
		const numberOut = document.querySelector('.card-front__number');
		const nameOut = document.querySelector('.card-front__name');
		const expirationOut = document.querySelector('.card-front__expiration');
		const cvcOut = document.querySelector('.card-back__cvc');

		let numberInValue = document.querySelector('input[name="number"]').value; {
			numberInValue = numberInValue.trim() == "" ? '0000 0000 0000 0000' : numberInValue;
		}
		let nameInValue = document.querySelector('input[name="name"]').value; {
			nameInValue = nameInValue.trim() == "" ? 'Jane Appleseed' : nameInValue;
		}
		let expirationInValue = document.querySelector('input[name="mm"]').value + '/' + document.querySelector('input[name="yy"]').value; {
			expirationInValue = expirationInValue.trim() == "/" ? '00/00' : expirationInValue;
		}
		let cvcInValue = document.querySelector('input[name="cvc"]').value; {
			cvcInValue = cvcInValue.trim() == "" ? '000' : cvcInValue;
		}

		numberOut.textContent = numberInValue;
		nameOut.textContent = nameInValue;
		expirationOut.textContent = expirationInValue;
		cvcOut.textContent = cvcInValue;
	}
	_updateCardGraphics();
})();