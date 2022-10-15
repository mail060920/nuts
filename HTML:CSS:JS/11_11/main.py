import mysql.connector
from datetime import datetime

db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='Burm1234',
    database='testbd'
)

mycursor = db.cursor()

mycursor.execute('CREATE TABLE Test1 (name varchar(50) NOT NULL, created datetime NOT NULL, gender ENUM("M", "F", "O") NOT NULL, id int PRIMARY KEY NOT NULL AUTO_INCREMENT)')
# mycursor.execute('CREATE TABLE Test1 (name varchar(50), created datetime, gender ENUM("M", "F", "O"))')


