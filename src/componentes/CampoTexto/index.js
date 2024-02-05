import './CampoTexto.css'

const CampoTexto = (propos) => {
    
    return (
        <div className="campo-texto">
            <label>
                {propos.label}
            </label>
            <input required={propos.obrigatorio} placeholder={propos.placeholder} />
        </div>

    )

}

export default CampoTexto;