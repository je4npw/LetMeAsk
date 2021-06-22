import { useHistory } from 'react-router-dom'

import {useAuth} from "../hooks/useAuth";

import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import googleImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import {Button} from "../components/Button";

export function Home() {
    const history = useHistory();

    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
    }
    return(
        <div id="page-auth">
            <aside>
                <img src={ illustration } alt="Inicial Imagem Login"/>
                <strong>Crie salas de Q&amp;A ao vivo!</strong>
                <p>Tire as dúvidas de sua audiência em tempo real.</p>
            </aside >
            <main>
                <div className="main-content">
                    <img src={ logoImg } alt="LetMeAsk" />
                    <button
                        onClick={handleCreateRoom}
                        className="create-room">
                        <img src={ googleImg } alt="Logo do Google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        Ou entre em uma sala
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite seu código de sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}