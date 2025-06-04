const bcrypt = require('bcrypt');

const plainPassword = '12345678';

bcrypt.hash(plainPassword, 10).then((hash) => {
    console.log('Hashed password:', hash);
});
