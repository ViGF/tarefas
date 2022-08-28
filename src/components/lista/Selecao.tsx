import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SelecaoProps {
    valor: boolean
}

export default function Selecao({ valor }: SelecaoProps) {
    const gradiente =  valor ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

    return (
        <div className={`
            flex justify-center items-center text-white
            h-7 w-7 rounded-full cursor-pointer
            border border-gray-400 ${gradiente}
        `}>
            {valor
                ? <FontAwesomeIcon icon={faCheck} />
                : ''
            }
        </div>
    )
}