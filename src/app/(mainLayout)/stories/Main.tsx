'use client'

import FiltersChips from '@/components/FiltersChips'
import Header from '@/components/header'
import { FC, useState } from 'react'
import { storiesFilterData } from './constant'
import StoriesList from './StoriesList'


const Main = ({ }) => {
    const [selectSportsFilter, setSelectSportsFilter] = useState("Entertainment")
    const [selectTitlesFilter, setSelectTitlesFilter] = useState("")
    const [modal, setmodal] = useState(false)
    const toggleModal = () => {
        setmodal(!modal)
    }
    return (
        <div className='flex flex-col gap-[10px] pb-[200px]'>
            <Header />
            <FiltersChips data={storiesFilterData} dataFilter={selectSportsFilter} setDataFilter={setSelectSportsFilter} setSelectTitlesFilter={setSelectTitlesFilter} />
            <StoriesList isOpen={modal} toggleModal={toggleModal} selectSportsFilter={selectSportsFilter} />

        </div>
    )
}

export default Main