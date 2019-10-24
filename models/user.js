const con = require("../config/db");

module.exports = {
    create: data => {
        return new Promise(function(resolve, reject) {
            con.query(`INSERT INTO user SET ? `, [data], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    read: () => {},
    update: () => {},
    delete: () => {}
};
