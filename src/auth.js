import axios from 'axios';

async function auntenticated(params) {
    try {
        const response = await api.post('/auth/sign-in', params);
        return response
    } catch (err) {
        return console.log(err);
    };
};

const api = axios.create({
    baseURL: 'https://books.ioasys.com.br/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

async function GetData(params) {
    return params;
};

async function ListBooks(values) {
    try {
        const response = await api.get(
            '/books',
            {
                params: {
                    page: values.page,
                    amount: values.amount,
                    category: values.category,
                },
                headers: {
                    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDE3MTYzYWZhZjVkZTIyYjgwNGExNzMiLCJ2bGQiOjE2MTQwMDU1NTUzNDUsImlhdCI6MTYxNDAwOTE1NTM0NX0.6_cSLgbwlbI6P8V8NrETr8PV7eNj_m-WGEIosG636jQ'}`,
                }
            }
        );
        return response;
    } catch (err) {
        return (err);
    };
}

async function SelectedBook(id) {
    try {
        const response = await api.get(
            `/books/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDE3MTYzYWZhZjVkZTIyYjgwNGExNzMiLCJ2bGQiOjE2MTQwMDU1NTUzNDUsImlhdCI6MTYxNDAwOTE1NTM0NX0.6_cSLgbwlbI6P8V8NrETr8PV7eNj_m-WGEIosG636jQ'}`,
                }
            }
        );
        return response;
    } catch (err) {
        return (err);
    };
}

export { auntenticated, ListBooks, SelectedBook, GetData }