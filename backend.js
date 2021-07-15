import axios from "axios"

const API_URL = "http://localhost:4000"

async function getdata() {
  try {
    await axios.post(
      API_URL,
      {
        query: `
      query getPeriodSubject($grade: Int!,$class: Int!,$day: Int!,$period: Int!) {
        getPeriodSubject(grade: $grade,classNum: $class,day: $day,period: $period){
          subject
          grade
          class
        }
      }
    `,
        variables: {
          grade: 2,
          class: 4,
          day: 2,
          period: 2,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export default getdata;
