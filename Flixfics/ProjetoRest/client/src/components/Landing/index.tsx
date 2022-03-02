import { useTranslation } from "react-i18next"

export const Landing = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-4">
            <h1 className="mb-3 title-text">{t('pagina_inicial.titulo')}</h1>
            <p className="lead mb-4">Somos um agregador de filmes para você selecionar quais quer assistir, marcar os assistidos e deixar suas opininões</p>
        </div>
    )
}