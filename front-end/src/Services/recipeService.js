import axios from "axios";

const API_URL = "http://localhost:5000/api/recipes";

export const getRecipes = async () => axios.get(API_URL);
export const createRecipe = async (data) => axios.post(API_URL, data);
export const updateRecipe = async (id, data) => axios.put('${API_URL}/${id}', data);