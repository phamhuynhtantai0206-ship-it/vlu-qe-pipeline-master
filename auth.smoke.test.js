const { login } = require("./auth");

test("Login successfully with correct credentials", () => {
    expect(login("admin", "123")).toBe(true);
});
