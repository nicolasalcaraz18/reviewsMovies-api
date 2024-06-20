import {Router} from  "express"
import userRoutes from "./userRouters.js"
import movieRoutes from "./movieRoutes.js"
import reviewRoutes from "./reviewRoutes.js"

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/movies",movieRoutes)
routes.use("/reviews",reviewRoutes)

export default routes