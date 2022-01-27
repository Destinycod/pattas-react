const useFormatNumber = () => {

    const formatNumber = (number) => {
        return new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(number)
    }

    return {
        formatNumber
    }
}

export default useFormatNumber