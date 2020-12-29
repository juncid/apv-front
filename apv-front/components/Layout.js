import { useRouter } from 'next/router'
import Header from "./Header";
import Footer from "./Footer";
import Preguntas from "./PreguntasFrecuentes";


export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div>
            <Header />
            {children}
            {router.pathname !== '/solicitud' && <Preguntas />}
            <Footer />
        </div>
    )
}