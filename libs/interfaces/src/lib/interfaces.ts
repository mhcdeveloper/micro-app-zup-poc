export interface Curso {
  id?: number;
  nome: string;
  descricao: string;
  duracao: string;
  situacao: number;
  imagem?: string;
}

export const userLogged = 'user-logged';
export const api_url = 'http://localhost:3333';
