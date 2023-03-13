function setToken() {
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

function refreshToken() {
  const refreshtoken = JSON.parse(localStorage.getItem('refreshtoken'));

  if (refreshtoken) {
    return {
      Authorization: 'Bearer ' + refreshtoken,
      'Access-Control-Allow-Origin': '*'
    }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}

const authHeader = {
  setToken,
  refreshToken
};

export default authHeader;