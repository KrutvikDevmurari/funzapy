'use client'
import React, { useState } from 'react'
import TabMenu from '../../../components/TabMenu'
import FiltersChips from '../../../components/FiltersChips'
import MathcWiseFilter from './MathcWiseFilter'
import MatchList from './MatchList'
import Header from '@/components/header'
import { sportsData } from './constants'
const page = () => {
    const [selectSportsFilter, setSelectSportsFilter] = useState("All")
    const [selectTitlesFilter, setSelectTitlesFilter] = useState("")
    return (
        <div className='flex flex-col gap-[10px] pb-[200px]'>
            <Header />
            <TabMenu />
            <FiltersChips data={sportsData} dataFilter={selectSportsFilter} setDataFilter={setSelectSportsFilter} setSelectTitlesFilter={setSelectTitlesFilter} />
            {selectSportsFilter !== "All" && <MathcWiseFilter selectSportsFilter={selectSportsFilter} selectTitlesFilter={selectTitlesFilter} setSelectTitlesFilter={setSelectTitlesFilter} />}
            <MatchList selectSportsFilter={selectSportsFilter} selectTitlesFilter={selectTitlesFilter} />
        </div>
    )
}

export default page