import React from 'react'
import styled from 'styled-components'
import AudioPlayer from './AudioPlayer'
import Like from './Like.js'
import UnLike from './UnLike'

const Card = ({ music, add }) => {

    const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

    return (
        <CardWrapper >
            <div className="card-header">
            </div>
            <div className="card-actions">

            </div>

            <div className="card-body">
                <div className="card-img-box">
                    <img src={music.album.cover_medium} alt="" />
                </div>

                <div className="info">
                    <div className='title'>{music.title}
                        <div className="deezer-link" >
                            <a title='ouvir no Deezer' href={`https://www.deezer.com/br/track/${music.id}`} target="_blank" ><i className="fa fa-link"></i></a>
                        </div>
                        {
                            add === true ? <Like music={music} /> : <UnLike music={music} />
                        }
                    </div>
                    <span>{music.artist.name}</span>
                    <span>{fmtMSS(music.duration)}</span>
                </div>
            </div>
            <div className="card-footer">
                <AudioPlayer track={music.preview} />
                <div className="action-bar">
                </div>
            </div>

        </CardWrapper>
    )
}

const CardWrapper = styled.div`
background-color: #222F3F;
width: 300px;

padding: 5px;
margin: 5px;
border-radius: 10px;
color:#fff;
position: relative;
overflow: hidden;

.info{
    padding: 5px 10px;
    vertical-align: center;
    
    span{
        color:gray;
        padding: 0px 5px;
        font-size:.8rem;
        padding:4px;
        margin: 0;
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        color:#fff;
    }
}

.deezer-link{
    margin-left:auto;
    margin-right:10px;
    color:#ffffff;
}

.deezer-link a {
    color: #fff
}

.card-img-box {
    padding: 0;
    margin: 0;
   img{
       width:100%;
       border-radius:15px;
   }
}

audio{
    width:280px;
    height:30px;
    margin:5px auto;
}




.card-footer{
    display: flex;
    justify-content: space-around;
    align-items:center;

    .favorite{ 
        padding-right:20px;
    }
}
`

export default Card