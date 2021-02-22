import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import {
    BackgroundImage,
    Content,
    Header,
    Title,
    List,
    Card,
    BookTitle,
    Author,
    Informations,
    Img,
    SignOutButton,
} from './style';
import { ListBooks, SelectedBook } from '../../../auth';
import Pagination from '../../Container/Pagination/index';
import ReactModal from '../../Container/Modal/index';
import { useModal } from '../../../Hooks/useModal';

export default function Home(props) {
    const pageLimit = 12;

    const { isOpen, toggleModal } = useModal();
    const [books, setBooks] = useState();
    const [page, setPage] = useState(1);
    const [bookSelected, setSelectedBook] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [changePage, setChangePage] = useState({
        page: page,
        amount: pageLimit,
        category: null,
    });

    useEffect(() => {
        SearchBooks()
    }, [])

    useEffect(() => {
        SearchBooks()
    }, [page])

    function handleChangePage(data) {
        const { selected } = data;
        setPage(selected + 1)
        setChangePage({
            ...changePage,
            page: page,
        });
    }

    async function SearchBooks() {
        try {
            const { data } = await ListBooks(changePage);
            if (data) {
                setTotalPage(Math.round(data.totalPages))
                setBooks(data.data);
            }
        } catch (err) {
            console.log(err);
        };
    }

    async function SearchSelectedBook(bookId) {
        const { data } = await SelectedBook(bookId);
        setSelectedBook(data);
    }

    return (
        <>
            <BackgroundImage>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ReactModal
                        isOpen={isOpen}
                        toggleModal={toggleModal}
                        bookSelected={bookSelected}
                    />
                </div>

                <Content>
                    <Header>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Img />
                            <Title>Books</Title>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                marginLeft: '10px',
                                alignItems: 'center',
                                padding: '10px'
                            }}
                        >
                            <h3
                                style={{ color: '#333333' }}>
                                {`Bem vindo, ${'Guilherme'}`}
                            </h3>
                            <SignOutButton
                                onClick={() => props.history.push('/')}>
                                {<FontAwesomeIcon icon={faSignOutAlt} />}
                            </SignOutButton>
                        </div>

                    </Header>
                    <Container>

                        <List>
                            {books && books.map(item => (
                                <Card
                                    key={item.id}
                                    onClick={() => {
                                        SearchSelectedBook(item.id);
                                        toggleModal();
                                    }}
                                >
                                    <img src={item.imageUrl}
                                        style={{
                                            maxWidth: '40%',
                                            margin: '10px',
                                        }}
                                    />
                                    <div style={{ marginTop: '14px' }}>
                                        <BookTitle>{item.title}</BookTitle>
                                        <Author>{item.authors[0]}</Author>
                                        <Informations>
                                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                                                <li>{`${item.pageCount} páginas`}</li>
                                                <li>{`Editora ${item.publisher}`}</li>
                                                <li>{`Publicado em ${item.published}`}</li>
                                            </ul>
                                        </Informations>

                                    </div>
                                </Card>
                            ))}
                        </List>
                    </Container>
                    <div>

                    </div>
                    <p>{`Página ${page} de ${totalPage}`}</p>
                    <Pagination style={{ listStyle: 'none', padding: 0 }}
                        pageCount={totalPage}
                        onClick={handleChangePage}
                    />
                </Content>
            </BackgroundImage>
        </>
    )
}