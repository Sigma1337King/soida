from flask import Flask, redirect, session, url_for, request, render_template

app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/order')
def order():
    if 'logged_in' in session:
        # Пользователь зарегистрирован, отправляем на страницу заказов
        return render_template('order.html')
    else:
        # Пользователь не зарегистрирован, отправляем на страницу регистрации
        return redirect(url_for('register'))

@app.route('/profile')
def profile():
    if 'logged_in' in session:
        # Пользователь зарегистрирован, отправляем на страницу профиля
        return render_template('profile/index.html')
    else:
        # Пользователь не зарегистрирован, отправляем на страницу регистрации
        return redirect(url_for('register'))

@app.route('/register')
def register():
    # Здесь должен быть код, который обрабатывает форму регистрации
    # Пример:
    # if request.method == 'POST':
    #     username = request.form['username']
    #     password = request.form['password']
    #     # Здесь должен быть код для проверки и сохранения данных пользователя
    #     session['logged_in'] = True
    #     return redirect(url_for('profile'))
    # else:
    return render_template('register.html')

# Запускаем приложение
if __name__ == '__main__':
    app.run(debug=True)
