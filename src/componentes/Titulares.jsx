import React from "react"

const Titulares = ({titulares}) => {
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                Titulares.map(j => (
                    <article className="titular">
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
}

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)