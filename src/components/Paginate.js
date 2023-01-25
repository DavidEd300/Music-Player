import React, { useState } from 'react'
import Card from './Card';
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';

const Paginate = ({ musics }) => {

  const [opcao, setOpcao] = React.useState('');
  const [busca, setBusca] = React.useState('');
  const [resultadoBusca, setResultadoBusca] = React.useState([]);

  const options = [
    { label: 'Artista', value: 'Artista' },
    { label: 'Música', value: 'Música' }
  ];

  const handleSearch = (e) => {
    setBusca(e.target.value);

    if (busca === '') {
      setResultadoBusca(musics);
    } else {
      const filteredMusics = musics.filter((music) => {
        if (opcao === 'Artista') {
          return music.artist.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
        } else {
          return music.title.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
        }
      })
      setResultadoBusca(filteredMusics);
    }
  }

  const [pageNumber, setPageNumber] = useState(0);
  const musicsPerPage = 6;
  const pagesVisited = pageNumber * musicsPerPage;


  const displayMusics = resultadoBusca.slice(pagesVisited, pagesVisited + musicsPerPage).map((music) => {
    return <Card add={true} key={music.id} music={music} />
  });

  React.useEffect(() => {
    setResultadoBusca(musics);
  }, [musics])

  const pageCount = Math.ceil(musics.length / musicsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const handleOption = (e) => {
    setOpcao(e.target.value);
  }

  React.useEffect(() => {
    console.log(opcao);
  }, [opcao])

  return (
    <>
      <BuscadorWrapper className="buscador">
        <div className="search-bar">

          <select className='search-filter' onChange={handleOption} >
            {
              options.map((option, i) => (
                <option key={i} className='opt' value={option.value}>{option.label}</option>
              ))
            }
          </select>

          { }
          <input
            className='search-field'
            type="text"
            placeholder='Buscar ...'
            onChange={handleSearch}
          />

          <div className="search-icon" >
            <i className="fa fa-search"></i>
          </div>
        </div>
      </BuscadorWrapper>


      <PaginateWrapper>
        { }
        {
          displayMusics

        }
        <div >
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Próximo"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            className="custom"

          />
        </div>

      </PaginateWrapper>
    </>

  )
}

const BuscadorWrapper = styled.div`
 text-align:center;
 color:white;
 margin: 15px auto;
 position:fixed;
 top:-10px;
 z-index:999;

 .search-bar{
    display:flex;
    width: 100%;

    .search-filter{               
        appearance: none;
        outline: 0;
        border: 0;
        box-shadow: none;
        /* Personalize */
        flex: 1;
        padding: 10px 10px;
        border:none;
        color: #333;
        font-size: 17px;
        cursor: pointer;
        background-color: #2980b9;
        color:#fff;
        font-weight: 300;
        font-family: Arial, Helvetica, sans-serif;
        border-top-left-radius:8px;
        border-bottom-left-radius:8px;
            &::after{
                background-color: orange !important;
            }
    }
    .search-icon{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #2980b9;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 5px 25px;
        .fa{
            color:#fff;
            font-size:20px;
        }
    }
 
    .search-field{
        color: white;
        background: transparent;
        border: solid 1px #2980b9;
        width:100%;
        padding: 0px 10px;
        &:focus{
            outline: none;
        }
        &::-webkit-input-placeholder{
            color:#999;
        }
    }

}

`

const PaginateWrapper = styled.div`

background-color:#232F3E;
width:100%;
display:grid;

grid-template-columns: 1fr ;
align-items: center;
justify-items: center;


@media (min-width:800px){
  grid-template-columns: 1fr 1fr;
  width:80%;

}

@media (min-width:1000px){
  grid-template-columns: 1fr 1fr 1fr;
  width:100%;
}

margin-bottom:70px;

.custom{
  position: absolute;
  bottom:0px;
  padding: 5px;
  width: fit-content;
  left:0;
  right:0;
  margin:0px auto;
  list-style-type:none;
  height: fit-content;
  display:flex;
}
.custom li{
  margin-top: -160px;
  font-family: Arial, Helvetica, sans-serif;
  background: #2980b9;
  padding: 10px 20px;
  border-radius: 4px;
  border: solid 1px #2980b9;
  color: #fff;
  font-weight: 600;
  margin: 5px;
  cursor: pointer;
}

.custom li:hover{
  background-color: #131922;
  border: solid 1px #131922;
}

`
export default Paginate
