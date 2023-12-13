from flask import Flask, render_template, request, redirect
from flaskext.mysql import MySQL

app = Flask(__name__, static_folder='static')


mysql = MySQL()
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'grupo22'
mysql.init_app(app)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/comprar")
def create_comprar():
    return render_template("comprar.html")

@app.route("/store", methods=["POST"])
def storage():
    nombre = request.form["nombre"]
    email = request.form["email"]
    telefono = request.form["telefono"]
    solicitud = request.form["solicitud"]

    datos = (nombre, email, telefono, solicitud)

    sql = "INSERT INTO `pedidos` (`id`, `nombre y apellido`, `email`, `telefono`, `solicitud`) VALUES (NULL, %s, %s, %s, %s)"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect('/pedidos')

@app.route("/contacto")
def create_contacto():
    return render_template("contacto.html")

@app.route("/historia")
def create_historia():
    return render_template("historia.html")

@app.route("/productos")
def create_productos():
    return render_template("productos.html")

@app.route("/pedidos")
def create_pedidos():
    sql = "SELECT * FROM `grupo22`.`pedidos`;"
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    db_pedidos=cursor.fetchall()

    conn.commit()

    return render_template('misPedidos.html',pedidos = db_pedidos)

@app.route('/destroy/<int:id>')
def destroy(id):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM `grupo22`.`pedidos` WHERE id=%s", (id))
    conn.commit() 
    return redirect('/pedidos')

@app.route('/edit/<int:id>')
def edit(id):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM `grupo22`.`pedidos` WHERE id=%s", (id))
    pedidos=cursor.fetchall()
    conn.commit() 
    return render_template('edit.html', pedidos=pedidos)

@app.route('/update', methods=['POST'])
def update():
    nombre = request.form["nombre"]
    email = request.form["email"]
    telefono = request.form["telefono"]
    solicitud = request.form["solicitud"]

    id=request.form['id']

    sql = "UPDATE `pedidos` SET `nombre y apellido` = %s, `email` = %s, `telefono` = %s, `solicitud` = %s WHERE `pedidos`.`id` = %s;"

    datos=(nombre,email,telefono,solicitud,id)
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql,datos)
    conn.commit() 
    return redirect('/pedidos')

if __name__ == "__main__":
    app.run(debug=True)

