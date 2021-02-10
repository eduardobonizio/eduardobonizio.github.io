import axios from 'axios';

export function isValid(cep) {
  if (!cep) return false;
  if (typeof cep !== 'string') return false;
  if (cep.replace(/\D/g, '').length !== 8) return false;
  return true;
}
export default async function find(cep) {
  if (!isValid(cep)) return null;
  try {
    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`, {
      timeout: 1500,
    });
    return response.data;
  } catch (e) {
    return null;
  }
}
