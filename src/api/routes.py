"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()

    return jsonify([user.serialize() for user in users]), 200

@api.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()

    if 'email' not in data or 'password' not in data:
        return jsonify({"msg": "Register not possible"}), 400
    
    new_user = User(email=data['email'], password=data['password'], is_active=True)

    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    user = User.query.filter_by(email = data['email'], password = data['password']).first()

    if user is None:
        return jsonify({"msg": "Incorrect email or password"}), 400

    token_user = create_access_token(identity=str(user.id))
    return({"token": token_user}), 200

@api.route("/protected", methods=['GET'])
@jwt_required()
def protected():

    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    return jsonify({ "user_id": user.id, "email": user.email })
