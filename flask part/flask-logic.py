from flask import Flask, redirect, session, url_for, render_template, request

app = Flask(__name__)
app.secret_key = 'your_super_secret_key'

# Предполагаем, что у нас есть база данных пользователей
# В реальном приложении вы бы использовали базу данных и проверяли бы пароли и т. д.
# Для примера мы просто используем фиктивный пользователь
users_db = {'user1': 'password1'}

@app.route('/')
def home():
    return render_template('home.html')  # Замените 'home.html' на ваш основной файл HTML

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Здесь должен быть код для регистрации пользователя
        username = request.form['username']
        password = request.form['password']
        # Проверка и регистрация пользователя
        # В реальном приложении вы бы использовали хеширование паролей
        # Здесь для упрощения мы пропустим этот шаг
        users_db[username] = password
        session['username'] = username
        return redirect(url_for('home'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Здесь должен быть код для аутентификации пользователя
        username = request.form['username']
        password = request.form['password']
        user_password = users_db.get(username)
        if user_password and user_password == password:
            session['username'] = username
            return redirect(url_for('home'))
        else:
            # В реальном приложении вы бы добавили сообщение об ошибке
            pass
    return render_template('login.html')

@app.route('/order')
def order():
    if 'username' not in session:
        return redirect(url_for('login'))
    # Пользователь зарегистрирован, отправляем на страницу заказов
    return render_template('order.html')

@app.route('/profile')
def profile():
    if 'username' not in session:
        return redirect(url_for('login'))
    # Пользователь зарегистрирован, отправляем на страницу профиля
    return render_template('profile.html')

if __name__ == '__main__':
    app.run(debug=True)
