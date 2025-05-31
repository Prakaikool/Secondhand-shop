const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'data', 'shop.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Failed to connect to the database', err.message);
    } else {
        console.log('Connected to the SQLite database');
    }
});

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price INTEGER NOT NULL,
      image_url TEXT,
      category_id INTEGER,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    )
  `);
    db.run(`INSERT INTO categories (name) VALUES ('Outerwear'), ('Bottoms')`);

    db.run(`
      INSERT INTO products (name, description, price, image_url, category_id)
      VALUES
          ('Cream Jacket', 'Warm vintage cream jacket', 25, '/uploads/cream-jacket.jpg', 1),
          ('Floral Skirt', 'Colorful secondhand floral skirt', 15, '/uploads/floral-skirt.jpg', 2),
          ('Denim Shirt', 'Retro denim shirt for casual wear', 20, '/uploads/denim-shirt.jpg', 1)
  `);
});

module.exports = db;
