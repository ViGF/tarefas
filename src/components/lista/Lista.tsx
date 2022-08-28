import ListaTarefas from "../../model/ListaTarefas"
import ListaItem from "./ListaItem"
import ListaRodape from "./ListaRodape"

interface ListaProps {
    tarefas: ListaTarefas
    mudou: (tarefas: ListaTarefas) => void
}

export default function Lista({ tarefas, mudou }: ListaProps) {
    function renderizarTarefas() {
        return tarefas.itens?.map(tarefa => {
            return (
                <ListaItem
                    key={tarefa.id}
                    valor={tarefa.descricao}
                    concluido={tarefa.concluida}
                    alterarStatus={() => {
                        const tarefaAlterada = tarefa.alternarStatus()
                        const novaLista = tarefas.modificarTarefa(tarefaAlterada)

                        mudou(novaLista)
                    }}
                />
            )
        })
    }

    return (
        <div className={`flex w-3/5 items-start relative`}>
            <ul className={`
                absolute -top-14
                w-full list-none rounded-lg
                bg-white shadow-lg
            `}>
                {renderizarTarefas()}
                <ListaRodape
                    tarefas={tarefas}
                    mudou={mudou}
                />
            </ul>
        </div>
    )
}