import api from '../services/api';
import { useCallback } from 'react';
import { Registro } from '../types/registro';

interface RegistroInput {
  titulo: string;
  conteudo: string;
}

export const useApi = () => {
    const getRegistros = async () => {
      const response = await api.get('registros/');
      return response.data;
    };
  
    const createRegistro = async (data: { titulo: string; conteudo: string }) => {
      const response = await api.post('registros/', data);
      return response.data;
    };
  
    const updateRegistro = async (id: number, data: { titulo?: string; conteudo?: string }) => {
      const response = await api.patch(`registros/${id}/`, data);
      return response.data;
    };
  
    const deleteRegistro = async (id: number) => {
      await api.delete(`registros/${id}/`);
    };
  
    return {
      getRegistros,
      createRegistro,
      updateRegistro,
      deleteRegistro
    };
  };