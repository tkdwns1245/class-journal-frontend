const fetchUser = require("./fetchUser");

test("fetch a user", (done) => {
    fetchUser(2, (user) => {
      expect(user).toEqual({
        id: 1,
        name: "User1",
        email: "1@test.com",
      });
      done();
    });
  });