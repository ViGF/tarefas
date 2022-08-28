import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefas";

const tarefasIniciais = new ListaTarefas([
    Tarefa.criarConcluida(1, 'Bem-Vindo')
])

export default tarefasIniciais