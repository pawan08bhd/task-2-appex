// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('messageError');
    if (message === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    // If all valid, show success message
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

// To-Do List Functionality
document.getElementById('addTodo').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    
    if (task !== '') {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        todoList.appendChild(li);
        input.value = '';
        
        // Add event listener to delete button
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
    }
}