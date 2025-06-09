async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        data.forEach(user => console.log(user.name));
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();