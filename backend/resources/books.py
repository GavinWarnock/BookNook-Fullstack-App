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
    def get(self, book_id):
        specific_book = Review.query.filter_by(book_id = book_id)
        reviews = []
        ratings = []
        for review in specific_book:
            reviews.append(review.reviews_text)
            ratings.append(review.rating)
        average_rating = (sum(ratings))/len(ratings)
        json = {
            "reviews":reviews,
            "ratings":average_rating
        }
        try: 
            verify_jwt_in_request()
            user = get_jwt_identity()
            test = db.session.query(Favorite).filter(
            Favorite.user_id.like(user),
            Favorite.book_id.like(book_id)
            ).first()
            if test:
                json["Favorited"] = True
            else:
                json["Favorited"] = False
        except:
            json["Favorited"] = "not logged in"
        
        return json, 200
        

class ReviewDetailResource(Resource):
    @jwt_required()
    def put(self, book_id):
        pass
