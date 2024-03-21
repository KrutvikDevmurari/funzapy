import CommonHeaders from '@/components/CommonHeaders'
import { FC } from 'react'
import GameCard from './GameCard'
import { GameData, OtherGames, WarGames } from './constant'

interface GamesListProps {

}

const GamesList: FC<GamesListProps> = ({ }) => {
    return <div>
        <CommonHeaders text={"All Games"} color={"bg-[#4f46e5]"} />
        <div className="flex flex-wrap justify-evenly -mx-px overflow-hidden mt-3 pl-3">
            {GameData.map(res => {
                return (
                    <GameCard key={res.title} imageUrl={res.imageUrl} title={res.title} />
                )
            })}
        </div>
        <div className="flex flex-wrap justify-evenly -mx-px overflow-hidden mt-3 pl-3">
            {WarGames.map(res => {
                return (
                    <GameCard key={res.title} imageUrl={res.imageUrl} title={res.title} />
                )
            })}
        </div>
        <div className="flex flex-wrap justify-evenly -mx-px overflow-hidden mt-3 pl-3">
            {OtherGames.map(res => {
                return (
                    <GameCard key={res.title} imageUrl={res.imageUrl} title={res.title} />
                )
            })}
        </div>

    </div >
}

export default GamesList