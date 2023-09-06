import mongoose from 'mongoose';

export const dbConnected = async () => {
	try {
		const db = await mongoose.connect(process.env.MONGO_URI!);
		console.log(`MongoDB Connected: ${db.connection.host}`);
	} catch (err) {
		if (err instanceof Error) {
			console.error(`Error: ${err.message}`);
			process.exit(1);
		}
	}
};
