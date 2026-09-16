const { login } = require("./auth");

test("Login fails with wrong password", () => {
    expect(login("admin", "9999")).toBe(false);
});

test("Login fails with empty username", () => {
    expect(login("", "123")).toBe(false);
});

test("Login fails with special characters in password", () => {
    expect(login("admin", "@#$%")).toBe(false);
});

test("Login fails with locked account", () => {
    expect(login("locked", "123")).toBe(false);
});

test("Login succeeds with correct credentials", () => {
    expect(login("admin", "123")).toBe(true);
});
