from flask import request
from flask_restful import Resource
from models.post import Post
from models.db import db



class Posts(Resource):
  def get(self):
    posts=Post.find_all()
    return [data.json()for data in posts]

  def post(self):
    data=request.get_json()
    post=Post(**data)
    post.create()
    return post.json(),201

class PostDetail(Resource):
  def put(self,post_id):
    data=request.get_json()
    post=Post.find_by_id(post_id)
    for key in data:
      setattr(post,key,data[key])
    db.session.commit()
    return post.json()

  def delete(self,post_id):
    post=Post.find_by_id(post_id)
    if not post:
      return {"msg":"Post not found"},404
    db.session.delete(post)
    db.session.commit()
    return{"msg":"Post Deleted","payload":post_id}
