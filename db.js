import mongoose from 'mongoose';
import {gradeSchema, userSchema} from './schema.js'
// MongoDB URI
const MONGO_URI = 'mongodb://localhost:27017/TESTDB'; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export const StudentGradeCollection = mongoose.model('StudentGrade', gradeSchema, 'testcollection');
export const usersCollection = mongoose.model('user', userSchema, 'usercollection')

