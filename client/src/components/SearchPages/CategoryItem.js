import React from 'react'
import {Song, SongImgContainer, BackgroundHover} from '../MainPages/SongItem'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import {getCategoryName} from '../../features/search/searchSlice'
const CategoryItem = ({category}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handlePushTocategory = () => {
        dispatch(getCategoryName(category.name))
        history.push(`/category/${category.id}`)
    }
    return (
        <Song onClick = {handlePushTocategory}>
            <SongImgContainer>
                <BackgroundHover></BackgroundHover>
                <div className="img-cover">
                    <img src={category.icons[0].url} alt=""/>
                    <h3>
                        {category.name}
                    </h3>
                </div>
            </SongImgContainer>
        </Song>

    )
}

export default CategoryItem
