import { useState } from 'react'
import useLyrics from '../hooks/useLyrics'

const Formulario = () => {
    const [search, setSearch] = useState({
        artista: '',
        cancion: ''
    })

    const { setAlert, searchLyrics } = useLyrics()

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('Coloca nombre de Artista y Canción')
            return
        }
        searchLyrics(search)
        setAlert('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <legend>Busca por Artistas y Canción</legend>
            <div className='form-grid'>
                <div>
                    <label>Artista</label>
                    <input type="text" name='artista' placeholder='Busca por Artista' value={search.artista} onChange={e => setSearch({
                        ...search,
                        [e.target.name] : e.target.value
                    })}/>
                </div>
                <div>
                    <label>Canción</label>
                    <input type="text" name='cancion' placeholder='Nombre de la Canción' value={search.cancion} onChange={e => setSearch({
                        ...search,
                        [e.target.name] : e.target.value
                    })}/>
                </div>

                <input type="submit" value='Buscar' />
            </div>
        </form>
    )
}

export default Formulario