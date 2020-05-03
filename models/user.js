const con = require("../config/db");

module.exports = {
    create: (data) => {
        return new Promise(function (resolve, reject) {
            con.query(`INSERT INTO user SET ? `, [data], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    read: (user_id) => {
        return new Promise(function (resolve, reject) {
            let query = `SELECT * FROM user u where  1 = 1`;
            if (user_id) {
                query += ` AND u.id ="${user_id}" `;
            }
            con.query(query, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    },
    update: (data, user_id) => {
        return new Promise((resolve, reject) => {
            con.query(
                `
                UPDATE 
                    user u
                SET 
                    ?
                WHERE 
                    u.id = ?
            `,
                [data, user_id],
                (error, status) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(status);
                    }
                }
            );
        });
    },
    delete: () => {},
};
