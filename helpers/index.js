export const formatDate = date => {
    const newDate = new Date() 

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('en-En', options )
}