function login(username, password) {
    // Check administrator login
    if (username === "admin" && password === "9999") {
        return true;
    }

    return false;
}

module.exports = { login };
