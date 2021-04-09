from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from models.post import Post
from models.user import User
from resources.post import Posts, PostDetail
from resources.auth import Login, Register
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/nfty_database"
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(Posts, '/posts')
api.add_resource(PostDetail, '/posts/<int:post_id>')
api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')

if __name__ == '__main__':
    app.run(port=3001, debug=True)
