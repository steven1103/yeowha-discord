import axios from "axios";

const API_URL = "http://localhost:4000";

async function getdata(gradeNum, classNum, day, period) {
  try {
    const result = await axios.post(
      API_URL,
      {
        query: `
      query getPeriodSubject($grade: Int!,$class: Int!,$day: Int!,$period: Int!) {
        getPeriodSubject(grade: $grade,classNum: $class,day: $day,period: $period){
          subject
          grade
          class
          teacher
        }
      }
    `,
        variables: {
          grade: gradeNum,
          class: classNum,
          day,
          period,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default getdata;
