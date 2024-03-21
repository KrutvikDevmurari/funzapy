'use client'

import TournamentHeader from './TournamentHeader'
import { useParams } from 'next/navigation'
import QuizComponent from './Quizcomponent'


const Main = () => {
    const params: any = useParams()

    return <div>
        <TournamentHeader tournamentName={decodeURIComponent(params.id)} />
        <QuizComponent />
    </div>
}

export default Main