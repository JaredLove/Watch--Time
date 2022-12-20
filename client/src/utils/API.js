// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveMovie = (movieData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movieData),
  });
};

// remove saved book data for a logged in user
export const deleteMovie = (movieId, token) => {
  return fetch(`/api/users/books/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const searchMovies = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=e62a8500b88c9a431caf5c5d9c7a7674&query=${query}`);
};

export const searchActors = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/person?api_key=e62a8500b88c9a431caf5c5d9c7a7674&query=${query}`);
};

