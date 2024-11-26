// const fetchUserByName = async () => {

//     const query = `
//       query {
//         getGardesByClassID(class_id : 24) {
//          student_id
//          class_id
//         }
//       }
//     `;

//     const queryByEmail = `
//       query {
//         getGardesByEmail(email : "pavani@gmail.com") {
//          student_id
//          class_id
//         }
//       }
//     `;

//     const getUserByID =`{
//   getUserByID(id: 1) {
//     firstName
//     lastName
//     gender
//     hair { 
//       color
//     }
//   }
// }`

//     const response = await fetch('http://localhost:4000/graphql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ queryByEmail }),
//     });

//     const data = await response.json();
//     // data.data.getGardesByClassID.map(x => console.log(x))
//     console.log(data)
// };

// fetchUserByName();



import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://your-graphql-endpoint.com/graphql'; // Replace with your GraphQL endpoint
const client = new GraphQLClient(endpoint);

const query = gql`
  query getGradesByEmail($email: String!) {
    getGradesByEmail(email: $email) {
      email
      student_id
      class_id
      scores {
        score
      }
    }
  }
`;

const variables = {
  email: 'pavani@gmail.com',
};

async function fetchGrades() {
  try {
    const response = await client.request(query, variables);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error fetching grades:', error);
  }
}

fetchGrades();
