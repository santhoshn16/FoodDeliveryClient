export default function authHeader() {
  const accesstoken = JSON.parse(localStorage.getItem('accesstoken'));

  if (accesstoken) {
    return {
      Authorization: 'Bearer ' + accesstoken,
      'Access-Control-Allow-Origin': '*'
    }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}