import {Router} from "express"
import ReviewController from "../Controllers/ReviewController.js"

const reviewRoutes = Router()
const reviewController = new ReviewController()

reviewRoutes.post("/", reviewController.createReview)

reviewRoutes.get("/:reviewId", reviewController.getReviewId)

reviewRoutes.put("/:reviewId", reviewController.updateReview)

reviewRoutes.delete("/:reviewId",reviewController.deleteReview)

export default reviewRoutes