import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect(`${process.env.MONGODB_URL}/ScanNServe`).then(() => console.log("DB Connected"));

<<<<<<< HEAD
}
=======
}
>>>>>>> c3bbb6a73db86fd4960898e516ff556460b5fef4
