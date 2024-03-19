import React, { useEffect, useState } from 'react';
import SportsCard from '../../../components/SportsCard';
import axios from 'axios';
import CommonHeaders from '@/components/CommonHeaders';

const MatchList = ({ selectSportsFilter, selectTitlesFilter }: any) => {

    const [matchData, setMatchData] = useState([])
    useEffect(() => {
        (async () => {
            const getData = await axios.get(`/api/sports/get?sport=${selectSportsFilter}&title=${selectTitlesFilter}`)
            setMatchData(getData.data.data)
        })()
    }, [selectSportsFilter, selectTitlesFilter])

    return (
        <div>
            {matchData.length > 0 && <CommonHeaders text={"Upcoming Matches"} color={"bg-gradient-to-l from-red-500 to-red-400 "} />}
            {matchData?.map((match: any) => (
                <SportsCard key={match.id} matchData={match} />
            ))}
        </div>
    );
}

export default MatchList;
