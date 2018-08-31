/*jshint multistr: true, node: true, esversion: 6, esversion: 7, undef: true, unused: true, varstmt: true*/
"use strict";

// Internal Modules
const DB                 = require('../config/sql');
DB.query('show tables', function(err,res,body){
  console.log(err);
  console.log(res);
  console.log(body);
});
module.exports = {

    getDetail: async (email, id) => {

        try {

            let query = `select * from user where email = ? or id = ?`;

            let result = await DB.query(query, [email, id]);

            console.log(result);
            return result;
        }
        catch(err) {
            console.log(err);
            return err;
        }

    },

    postDetail: async ( email, f_name, l_name, phone, gender, password ) => {

        try {

            let query = `insert into user(?)`;

            let result = await DB.query(query, [ email, f_name, l_name, phone, gender, password ]);

            console.log(result);
            return result;
        }
        catch(err) {
            console.log(err);
            return err;
        }

    },

    putDetail: async ( email, f_name, l_name, phone, gender ) => {

        try {

            let query = `update table user
                set f_name = ?, 
                    l_name = ?,
                    phone  = ?,
                    gender = ?
                where email = ?`;

            let result = await DB.query(query, [ f_name, l_name, phone, gender, email ]);

            console.log(result);
            return result;
        }
        catch(err) {
            console.log(err);
            return err;
        }

    }

};
