
const users = [];

function addUser(firstName, lastName, age) {
    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        age
    };
    users.push(newUser);
    rerender();
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        rerender();
    }
}

function rerender() {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';

    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('userCard');
        card.innerHTML = `
            <p><b>Name:</b> ${user.firstName} ${user.lastName}</p>
            <p><b>Age:</b> ${user.age}</p>
        `;

        card.addEventListener('dblclick', () => deleteUser(user.id));

        userContainer.appendChild(card);
    });
}

const form = document.getElementById('userForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    addUser(firstName, lastName, age);

    form.reset();
});

rerender();