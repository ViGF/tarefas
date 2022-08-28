import Tarefa from "./Tarefas";
import TipoFiltro from "./TipoFiltro";

export default class ListaTarefas {
    #todas: Tarefa[]
    #filtroUtilizado: TipoFiltro

    constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
        this.#todas = todas
        this.#filtroUtilizado = filtroUtilizado
    }

    get itens() {
        return this.#aplicarFiltroEm(this.#todas)
    }

    get quantidade() {
        return this.itens.length
    }

    get filtroUtilizado() {
        return this.#filtroUtilizado
    }

    adicionarTarefa(novaTarefa: Tarefa) {
        const todas = [...this.#todas]
        todas.push(novaTarefa)

        return new ListaTarefas(todas, this.#filtroUtilizado)
    }

    modificarTarefa(tarefaModificada: Tarefa) {
        const todas = this.#todas.map(tarefa => {
            return tarefa.id == tarefaModificada.id ? tarefaModificada : tarefa
        })

        return new ListaTarefas(todas, this.#filtroUtilizado)
    }

    filtrarAtivas() {
        if (!this.exibindoSomenteAtivas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.ATIVAS)
        } else {
            return this
        }
    }

    excluirConcluidas() {
        const somenteAtivas = this.#todas.filter(tarefa => tarefa.ativa)
        return new ListaTarefas(somenteAtivas, TipoFiltro.NENHUM)
    }

    filtrarConcluidas() {
        if (!this.exibindoSomenteConcluidas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.CONCLUIDAS)
        } else {
            this
        }
    }

    removerFiltro() {
        if (!this.exibindoTodas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.NENHUM)
        } else {
            return this
        }
    }

    exibindoTodas() {
        return this.#filtroUtilizado === TipoFiltro.NENHUM
    }

    exibindoSomenteAtivas() {
        return this.#filtroUtilizado === TipoFiltro.ATIVAS
    }

    exibindoSomenteConcluidas() {
        return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS
    }

    #aplicarFiltroEm(tarefas: Tarefa[]) {
        if (this.exibindoSomenteAtivas()) {
            return this.#aplicarFiltroAtivas(tarefas)
        } else if (this.exibindoSomenteConcluidas()) {
            return this.#aplicarFiltroConcluidas(tarefas)
        } else {
            return [...tarefas]
        }
    }

    #aplicarFiltroAtivas(tarefas: Tarefa[]) {
        return tarefas.filter(tarefa => tarefa.ativa)
    }

    #aplicarFiltroConcluidas(tarefas: Tarefa[]) {
        return tarefas.filter(tarefa => tarefa.concluida)
    }

    static criarUsandoObjeto(todas: [], filtroUtilizado: TipoFiltro) {
        const todasObjetos = todas.map(tarefa => Tarefa.criarUsandoObjeto(tarefa)) 
        return new ListaTarefas(todasObjetos, filtroUtilizado)
    }

    converterParaObjeto() {
        return {
            todas: this.#todas.map(tarefa => tarefa.converterParaObjeto()),
            filtroUtilizado: this.#filtroUtilizado
        }
    }
}