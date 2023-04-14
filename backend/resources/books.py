from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Review
from database.schemas import review_schema, reviews_schema
class UserReviews(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_reviews = Review.query.filter_by(user_id=user_id)
        return reviews_schema.dump(user_reviews), 201

