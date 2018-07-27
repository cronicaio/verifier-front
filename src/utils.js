
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', JSON.stringify(token));
}

export const getAuthToken = () => {
  const token = localStorage.getItem('authToken');

  if (typeof token !== 'string') {
    localStorage.clear();
    return null;
  }
  return JSON.parse(token);
}

export const setUsername = (username) => {
  localStorage.setItem('username', JSON.stringify(username));
}

export const getUsername = () => {
  const username = localStorage.getItem('username');
  return JSON.parse(username);
}

export const logout = (history) => {
  localStorage.setItem('authToken', null);
  history.push('/')
}

export const checkAuth = (error, history) => {
  if (error && error.status === 401) {
    logout(history);
  }
}