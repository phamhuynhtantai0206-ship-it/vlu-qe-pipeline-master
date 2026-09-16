function login(username, password) {
    // Check administrator login
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
