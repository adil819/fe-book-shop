import * as yup from 'yup'

const bookSchema = yup.object().shape({

    title: yup.string()
        .required('Title is required')
        .min(1, 'Title must be at least 1 characters'),
    description: yup.string()
        .required('Description is required')
        .min(5, 'Description must be at least 5 characters'),
    publisher: yup.string()
        .required('Publisher is required')
        .min(6, 'Publisher must be at least 6 characters'),
    year: yup.string()
        .required('Year is required')
        .max(4, 'year must be at max 4 characters'),
    pages: yup.number()
        .required('Page is required')
        .min(1, 'page must be at least 1 characters'),
    language: yup.string()
        .required('Language is required')
        .min(4, 'Language must be at least 4 characters'),
    stock: yup.number()
        .required('Stock is required')
        .min(0, 'Stock must be at least 0 characters'),
    price: yup.number()
        .required('Price is required'),
        // .min(6, 'Price must be at least  characters')
    purchaseAmount: yup.number()
        .required('Purchase amount is required')
        // .min(6, 'Purchase amount be at least characters')
})

const memberSchema = yup.object().shape({

    // title: yup.string()
    //     .required('Title is required')
    //     .min(1, 'Title must be at least 1 characters'),
    // description: yup.string()
    //     .required('Description is required')
    //     .min(5, 'Description must be at least 5 characters'),
    // publisher: yup.string()
    //     .required('Publisher is required')
    //     .min(6, 'Publisher must be at least 6 characters'),
    // year: yup.string()
    //     .required('Year is required')
    //     .max(4, 'year must be at max 4 characters')
})

export { bookSchema, memberSchema }