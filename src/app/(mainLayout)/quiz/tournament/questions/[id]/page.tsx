"use client"
import { FC } from 'react'
import TournamentHeader from './TournamentHeader'
import { useParams } from 'next/navigation'
import QuizComponent from './Quizcomponent'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    const params: any = useParams()

    return <div>
        <TournamentHeader tournamentName={decodeURIComponent(params.id)} />
        <QuizComponent />
    </div>
}

export default page