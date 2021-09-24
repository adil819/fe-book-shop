import * as yup from 'yup'

export const bookSchema = yup.object().shape({

    title: yup.string()
        .required('Title is required')
        .min(6, 'Title must be at least 6 characters'),
    description: yup.string()
        .required('Description is required')
        .min(50, 'Description must be at least 50 characters'),
    publisher: yup.string()
        .required('Publisher is required')
        .min(6, 'Publisher must be at least 6 characters'),
    year: yup.number()
        .required('Year is required')
        .min(1500, 'Example : 2004'),
    page: yup.number()
        .required('Page is required')
        .min(1, 'page must be at least 1 characters'),
    language: yup.string()
        .required('Language is required')
        .min(4, 'Language must be at least 4 characters'),
    stock: yup.number()
        .required('Stock is required')
        .min(0, 'Stock must be at least 0 characters'),
    price: yup.number()
        .required('Price is required')
        .min(6, 'Price must be at least  characters')
})