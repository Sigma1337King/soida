from flask import Flask, redirect, session, url_for
import sqlite3
from flask import g

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Задайте свой секретный ключ для сессии

DATABASE = 'database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/order.html')
def order():
    if 'username' in session:
        return redirect(url_for('order_page'))  # Предполагается, что у вас есть функция представления order_page
    else:
        return redirect(url_for('register'))

@app.route('/profile/index.html')
def profile():
    if 'username' in session:
        return redirect(url_for('profile_page'))  # Предполагается, что у вас есть функция представления profile_page
    else:
        return redirect(url_for('register'))

@app.route('/register.html')
def register():
    return redirect(url_for('register_page'))  # Предполагается, что у вас есть функция представления register_page

# Инициализация базы данных SQLite
def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

# Добавьте свои функции представления для страниц
# ...

if __name__ == '__main__':
    init_db()  # Инициализируем базу данных
    app.run(debug=True)
