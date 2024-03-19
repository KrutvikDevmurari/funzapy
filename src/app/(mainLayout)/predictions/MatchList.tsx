import React, { useEffect, useState } from 'react';
import SportsCard from '../../../components/SportsCard';
import axios from 'axios';
import CommonHeaders from '@/components/CommonHeaders';
import Spinner from '@/components/Loader';

const MatchList = ({ selectSportsFilter, selectTitlesFilter }: any) => {

    const [matchData, setMatchData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const getData = await axios.get(`/api/sports/get?sport=${selectSportsFilter}&title=${selectTitlesFilter}`)
            setMatchData(getData.data.data)
            setIsLoading(false)
        })()
    }, [selectSportsFilter, selectTitlesFilter])

    return (
        <div>
            {isLoading ? <Spinner /> : matchData.length > 0 ? (
                <>
                    <CommonHeaders text={"Upcoming Matches"} color={"bg-gradient-to-l from-red-500 to-red-400 "} />
                    {matchData?.map((match: any) => (
                        <SportsCard key={match.id} matchData={match} />
                    ))}
                </>
            ) : <p>No data Found</p>
            }


        </div>
    );
}

export default MatchList;
