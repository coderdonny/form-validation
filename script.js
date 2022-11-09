const email = document.querySelector('#email');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector('form');
const emailError = document.querySelector('.email-error');
const zipError = document.querySelector('.zip-error');
const passwordError = document.querySelector('.password-error');
const confirmPasswordError = document.querySelector('.confirm-password-error');

email.addEventListener('input', (event) => {
	// Each time the user types something, we check if the
	// form fields are valid.

	if (email.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		emailError.textContent = ''; // Reset the content of the message
		emailError.className = 'error'; // Reset the visual state of the message
	} else {
		// If there is still an error, show the correct error
		showError();
	}
});

zip.addEventListener('input', (event) => {
	// Each time the user types something, we check if the
	// form fields are valid.

	if (zip.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		zipError.textContent = ''; // Reset the content of the message
		zipError.className = 'error'; // Reset the visual state of the message
	} else {
		// If there is still an error, show the correct error
		showError();
	}
});

password.addEventListener('input', (event) => {
	// Each time the user types something, we check if the
	// form fields are valid.

	if (password.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		passwordError.textContent = ''; // Reset the content of the message
		passwordError.className = 'error'; // Reset the visual state of the message
	} else {
		// If there is still an error, show the correct error
		showError();
	}
});

confirmPassword.addEventListener('input', (event) => {
	// Each time the user types something, we check if the
	// form fields are valid.

	if (confirmPassword.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		confirmPasswordError.textContent = ''; // Reset the content of the message
		confirmPasswordError.className = 'error'; // Reset the visual state of the message
	} else {
		// If there is still an error, show the correct error
		showError();
	}
});

form.addEventListener('submit', (event) => {
	// if the email field is valid, we let the form submit
	if (!email.validity.valid) {
		// If it isn't, we display an appropriate error message
		showError();
		// Then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
	if (!zip.validity.valid) {
		// If it isn't, we display an appropriate error message
		showError();
		// Then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
	if (!password.validity.valid) {
		// If it isn't, we display an appropriate error message
		showError();
		// Then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
	if (password.value != confirmPassword.value) {
		// If it isn't, we display an appropriate error message
		showError();
		// Then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
});

function showError() {
	if (email.validity.valueMissing) {
		// If the field is empty,
		// display the following error message.
		emailError.textContent = 'You need to enter an e-mail address.';
	} else if (email.validity.typeMismatch) {
		// If the field doesn't contain an email address,
		// display the following error message.
		emailError.textContent = 'Entered value needs to be an e-mail address.';
	} else if (email.validity.tooShort) {
		// If the data is too short,
		// display the following error message.
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}
	// Set the styling appropriately
	emailError.className = 'error active';

	if (!email.validity.valid) {
		return;
	} else {
		if (zip.validity.valueMissing) {
			// If the field is empty,
			// display the following error message.
			zipError.textContent = 'You need to enter a valid Zip Code.';
		} else if (zip.validity.typeMismatch) {
			// If the field doesn't contain an email address,
			// display the following error message.
			zipError.textContent =
				'Entered value needs to be an e-mail address.';
		} else if (zip.validity.tooShort) {
			// If the data is too short,
			// display the following error message.
			zipError.textContent = `Your Zip Code should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
		}
		// Set the styling appropriately
		if (email.validity.valid) {
			zipError.className = 'error active';
			emailError.className = 'error';
		}
	}
	if (!email.validity.valid || !zip.validity.valid) {
		return;
	} else {
		if (password.validity.valueMissing) {
			// If the field is empty,
			// display the following error message.
			passwordError.textContent = 'You need to enter a Password.';
		} else if (password.validity.typeMismatch) {
			// If the field doesn't contain an email address,
			// display the following error message.
			passwordError.textContent = 'Entered value needs to be a password.';
		} else if (password.validity.tooShort) {
			// If the data is too short,
			// display the following error message.
			passwordError.textContent = `Your password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
		}
		// Set the styling appropriately
		if (email.validity.valid && zip.validity.valid) {
			passwordError.className = 'error active';
			emailError.className = 'error';
			zipError.className = 'error';
		}
	}
	if (
		!email.validity.valid ||
		!zip.validity.valid ||
		!password.validity.valid
	) {
		return;
	} else {
		if (password.value != confirmPassword) {
			confirmPasswordError.textContent = 'your passwords do not match';
		}
		if (
			email.validity.valid &&
			zip.validity.valid &&
			password.validity.valid
		) {
			confirmPasswordError.className = 'error active';
			passwordError.className = 'error';
			emailError.className = 'error';
			zipError.className = 'error';
		}
	}
}
