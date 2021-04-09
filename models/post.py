from datetime import datetime
from models.db import db


class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    username = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    bid = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=str(
        datetime.utcnow()), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.now())
    user = db.relationship('User', backref=db.backref('users', lazy=True))

    def __init__(self,user_id,username, image, bid, description):
        self.user_id=user_id
        self.username = username
        self.image = image
        self.bid = bid
        self.description = description

    def json(self):
        return{"id": self.id, "user_id":self.user_id, "username": self.username, "image": self.image, "bid": self.bid, "description": self.description, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        return Post.query.order_by(Post.bid.desc()).all()

    @classmethod
    def find_by_id(cls, post_id):
        post = Post.query.filter_by(id=post_id).first()
        return post
