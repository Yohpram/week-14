import { instance } from '../axios/index';

// Helper function to handle requests and errors
async function handleRequest(request) {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}

// Function for register user endpoint
function registerUser(name, email, password) {
  return handleRequest(instance.post('/register', { name, email, password }));
}

// Function for login user endpoint
function loginUser(email, password) {
  return handleRequest(instance.post('/login', { email, password }));
}

// Function for create book endpoint
function createBook(formData) {
  return handleRequest(instance.post('/books', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }));
}

// Function for get all books endpoint
function getAllBooks() {
  return handleRequest(instance.get('/books'));
}

// Function for edit book endpoint
function editBook(id, title, author, publisher, year, pages) {
  return handleRequest(instance.put(`/books/${id}`, { title, author, publisher, year, pages }));
}

// Function for delete book endpoint
function deleteBook(id) {
  return handleRequest(instance.delete(`/books/${id}`));
}

function getBookDetailById(id) {
  return handleRequest(instance.get(`/books/${id}`));
}

export { registerUser, loginUser, createBook, getAllBooks, editBook, deleteBook, getBookDetailById };
