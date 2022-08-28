interface ListaBotaoProps {
    selecionado?: boolean
    className?: string
    children: any
    onClick: (evento: any) => void
}

export default function ListaBotao({ selecionado, className, children, onClick }: ListaBotaoProps) {
    const borda = selecionado ? 'border-b-4 border-purple-400' : ''

    return (
        <button
            onClick={onClick}
            className={`
            text-gray-500 font-semibold hover:text-black
            focus:outline-none font ${borda}
            ${className}
        `}>
            {children}
        </button>
    )
}