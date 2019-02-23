// This function validates input
export const validateInput = (title,description,price) => {
    if (
        title.trim().length === 0 ||
        price <= 0 ||
        description.trim().length === 0
    ) {
        return false
    }
    return { title, description, price };

}