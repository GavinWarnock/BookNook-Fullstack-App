from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Favorite, Review
from database.schemas import review_schema, reviews_schema, favorite_schema, favorites_schema
class UserReviewsResource(Resource):
    
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_review = review_schema.load(form_data)
        new_review.user_id = user_id
        db.session.add(new_review)
        db.session.commit()
        return review_schema.dump(new_review), 201
    

class UserFavoritesResource(Resource):

    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_favorites = Favorite.query.filter_by(user_id=user_id)
        return favorites_schema.dump(user_favorites), 200

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_favorite = favorite_schema.load(form_data)
        new_favorite.user_id = user_id
        db.session.add(new_favorite)
        db.session.commit()
        return favorite_schema.dump(new_favorite), 201
    
    
class GetBooksInformationResource(Resource):
    @jwt_required()
    def get(self, book_id):
        user_id = get_jwt_identity()
        specific_book = Review.query.filter_by(book_id=book_id).all()
        reviews = []
        ratings = []
        is_favorited = False

        # Get all reviews for the specific book and calculate average rating
        for review in specific_book:
            reviews.append(review.text)
            ratings.append(review.rating)
        if len(ratings) > 0:
            average_rating = sum(ratings) / len(ratings)
        else:
            average_rating = 0

        # Check if the logged-in user has favorited the book
        favorite = Favorite.query.filter_by(user_id=user_id, book_id=book_id).first()
        if favorite:
            is_favorited = True

        # Construct the response dictionary
        response_dict = {
            "reviews": reviews,
            "ratings": average_rating,
            "is_favorited": is_favorited
        }
        return response_dict, 200

class ReviewDetailResource(Resource):
    @jwt_required()
    def put(self, review_id):
        user_id = get_jwt_identity()
        review_from_db = Review.query.get_or_404(review_id)
        if 'book_id' in request.json:
            review_from_db.book_id = request.json['book_id']
        if 'text' in request.json:
            review_from_db.text = request.json['text']
        if 'rating' in request.json:
            review_from_db.rating = request.json['rating']
        db.session.commit()
        return review_schema.dump(review_from_db), 200
    
    @jwt_required()
    def delete(self, review_id):
        review_from_db = Review.query.get_or_404(review_id)
        db.session.delete(review_from_db)
        db.session.commit()
        return "", 204
    