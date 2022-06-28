const fetchUser = function(id, cb) {
    setTimeout(() => {
      console.log("wait 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      cb(user);
    }, 100);
  }

module.exports = fetchUser;