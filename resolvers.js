import { StudentGradeCollection, usersCollection } from './db.js'
// GraphQL Resolvers

const resolvers = {
  Query: {
    getGardesByClassID: async (_, { class_id }) => {
      try {
        const response = await StudentGradeCollection.find({ class_id });
        return response.map(({ student_id, class_id }) => ({ student_id, class_id }));
      } catch (err) {
        console.error(err);
        throw new Error('Error fetching grades');
      }
    },
    getGardesByEmail: async (_, { email }) => {
      try {
        const response = await StudentGradeCollection.findOne({ email });
        //   return response.map(({ student_id, class_id }) => ({ student_id, class_id }));
        return response;
      } catch (err) {
        throw new Error('Error fetching user');
      }
    },
    getUserByID: async (_, { id }) => {
      try {
        return await usersCollection.findOne({ id });
      } catch (error) {
        throw new Error('Error fetching user by id');
      }
    }
  },
  Mutation: {
    createGrade: async (_, { email, class_id, student_id }) => {
      // Example using MongoDB
      const grade = {
        email,
        class_id,
        student_id,
        scores: [
          { type: "interview" }
        ]
      };
      // Save to database
      await StudentGradeCollection.insertMany([grade,grade]);
      // Return the created student
      return grade;
    },
  },

};

export default resolvers;