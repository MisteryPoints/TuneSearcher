import { useState, useContext, createContext } from 'react'

const LyricsContext = createContext()

const LyricsProvider = ({children}) => {
    const [alert, setAlert] = useState('')

    const searchLyrics = async (search) => {
        try {
            const { artista, cancion } = search
            const url = `https:/api.lyrics.ovh/v1/${artista}/${cancion}`
            console.log(url)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <LyricsContext.Provider value={{
            alert, 
            setAlert,
            searchLyrics
        }}>
            {children}
        </LyricsContext.Provider>
    )
}


export {
    LyricsProvider
}

export default LyricsContext