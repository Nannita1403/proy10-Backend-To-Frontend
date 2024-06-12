import './UserForm.css';

export const UserForm = (parentElement, formName, fields) => {
  const form = document.createElement('form');
  form.classList.add('flex-container', 'user-form');
  const title = document.createElement('h2');
  title.textContent = formName;
  form.append(title);
  for (const field of fields) {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    const input = document.createElement('input');
    input.required = true;
    input.autocomplete = 'off';
    input.type = field.type;
    input.classList.add('input');
    input.id = field.id;
    const label = document.createElement('label');
    label.classList.add('iLabel');
    label.htmlFor = field.id;
    label.textContent = field.name;
    if (field.type === 'password') {
      input.minLength = 8;
    }
    inputContainer.append(input, label);
    form.append(inputContainer);
  }
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.classList.add('submit');
  form.append(submitButton);
  parentElement.append(form);
};