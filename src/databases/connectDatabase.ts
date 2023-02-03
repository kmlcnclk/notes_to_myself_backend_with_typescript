import mongoose from 'mongoose';
import log from '../tools/index';

const connectDatabase = () => {
  const dbUri = process.env.MONGO_URI as string;

  mongoose.set('strictQuery', true);
  return mongoose
    .connect(dbUri, {
      //@ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info('MongoDB Connection Successful');
    })
    .catch((err) => {
      log.error(err);
    });
};

export default connectDatabase;
