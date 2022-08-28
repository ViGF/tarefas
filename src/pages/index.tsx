import { useEffect, useState } from "react"
import Formulario from "../components/formulario/Formulario"
import Lista from "../components/lista/Lista"
import Cabecalho from "../components/template/Cabecalho"
import Conteudo from "../components/template/Conteudo"

import tarefasIniciais from "../data/mock"
import ListaTarefas from "../model/ListaTarefas"
import Tarefa from "../model/Tarefas"

export default function Home() {
    const [tarefas, setTarefas] = useState(tarefasIniciais)

    function pegarEstado() {
        if(window.localStorage.getItem('tarefas')) {
            let estado = JSON.parse(window.localStorage.getItem('tarefas'))
            estado = ListaTarefas.criarUsandoObjeto(estado.todas, estado.filtroUtilizado)
    
            setTarefas(estado)
        }
    }

    useEffect(() => {
        pegarEstado()
    }, [])

    function atualizarEstado(tarefas: ListaTarefas) {
        window.localStorage.setItem('tarefas', JSON.stringify(tarefas.converterParaObjeto()));
    }

    function novaTarefaCriada(novaTarefa: Tarefa) {
        setTarefas(tarefas.adicionarTarefa(novaTarefa))
        atualizarEstado(tarefas.adicionarTarefa(novaTarefa))
    }

    function mudou(novasTarefas) {
        setTarefas(novasTarefas)
        atualizarEstado(novasTarefas)
    }

    return (
        <div className={`
            flex flex-col
            h-screen text-sm
            mb-100
        `}>
            <Cabecalho>
                <Formulario novaTarefaCriada={novaTarefaCriada} />
            </Cabecalho>
            <Conteudo>
                <Lista
                    tarefas={tarefas}
                    mudou={novasTarefas => mudou(novasTarefas)}
                />
            </Conteudo>
        </div>
    )
}