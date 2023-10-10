import mongoose from 'mongoose';

const connect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO);
        console.log(`MongoDB connected: ${connect.connection.host}`)
        // console.log("MongoDB connection succesfully")
    } catch (err) {
        console.log(err.message)
        process.exit(1);
    }
};

// export {connect}
export default connect