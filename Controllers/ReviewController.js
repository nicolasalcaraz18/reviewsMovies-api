import Review from "../Models/Review.js";

class ReviewController{

    async createReview(req,res){
        try {
            const {rating,comment} = req.body
            if(!rating || !comment){
                return res.status(400).send({ success: false, message: "Todos los campos son obligatorios" });
            }
            const newReview = await Review.create({rating,comment})
            res.status(201).send({success:true,message:"Reseña creada",user:newReview}) 
        } catch (error) {
            res.status(400).send({success:false,message:error.message})
        }
    }

    async getReviewId(req,res){
        try {
            const {reviewId} = req.params;
            const review = await Review.findOne({where:{reviewId}})
            if (!review){
                return res.status(404).send({ success: false, message: "No se encontro la reseña" });
            }
            res.status(200).send({success:true,message:review})
        } catch (error) {
            res.status(400).send({success:false,message:error.message})
        }
    }

    async updateReview (req,res){
        try {
            const {reviewId} = req.params;
            const {comment,rating} = req.body;
            const [update] = await Review.update({comment,rating},{where:{reviewId}})
            if(update){
                res.status(200).send({ success: true, message: "Reseña modificada" });
            } else {
                res.status(404).send({ success: false, message: "Reseña inexistente" });
            }
        } catch (error) {
            res.status(400).send({success:false,message:error.message})
        }
    }

    async deleteReview(req,res){
        try {
            const {reviewId} = req.params;
            const deleted = await Review.destroy({
                where:{
                    reviewId:reviewId
                }
            })
            if(deleted){
                res.status(200).send({success:true,message:"Reseña borrada"})
            }else {
                res.status(404).send({ success: false, message: "Reseña no encontrada" });
            }
        } catch (error) {
            res.status(400).send({success:false,message:error})
        }
    }

}

export default ReviewController