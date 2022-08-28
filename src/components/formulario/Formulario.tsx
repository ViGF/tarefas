import { ComponentRef, useRef, useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tarefa from "../../model/Tarefas"

interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario({ novaTarefaCriada }: FormularioProps) {
    const descricaoRef = useRef<HTMLInputElement>()

    function criarNovaTarefa() {
        const descricao = descricaoRef.current?.value
        if(descricao?.trim().length > 0) {
            const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao)
            novaTarefaCriada(novaTarefa)
            descricaoRef.current.value = ''
        }
    }

    return (
        <div className="flex flex-1 justify-center">
            <input
                type="text"
                ref={descricaoRef}
                placeholder="Informe sua próxima tarefa"
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
                className={`
                    w-1/2 py-2 px-3 rounded-lg border-2 text-md
                    border-purple-300 focus:outline-none
                    focus:ring-2 focus:ring-purple-600
                `}
            />
            <button onClick={criarNovaTarefa} className={`
                ml-3 px-3 py-0 focus:outline-none rounded-lg
                bg-purple-600 text-white text-xl
            `}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}