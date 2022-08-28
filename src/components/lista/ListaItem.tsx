import Selecao from "./Selecao"

interface ListaItemProps {
    valor: string
    concluido: boolean
    alterarStatus: () => void
}

export default function ListaItem({ valor, concluido, alterarStatus }: ListaItemProps) {
    const estiloTexto = concluido ? 'line-through text-gray-400' : 'text-gray-600'

    return (
        <li onClick={alterarStatus} className={`
            text-black flex items-center p-4 text-sm
            border-b border-gray-400 cursor-pointer
            last:border-b-0
        `}>
            <Selecao valor={concluido} />
            <span className={`
                font-light ml-3
                ${estiloTexto}
            `}>
                {valor}
            </span>
        </li>
    )
}