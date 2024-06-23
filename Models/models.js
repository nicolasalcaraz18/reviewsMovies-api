import User from "./User.js";
import Movie from "./Movie.js";
import Review from "./Review.js";

User.hasMany(Review,{foreignKey:"userId"})
Review.belongsTo(User,{foreignKey:"userId"})

Movie.hasMany(Review,{foreignKey:"movieId"})
Review.belongsTo(Movie,{foreignKey:"movieId"})

export {User,Movie,Review}