
export const modalAGTypes = {
    OPEN_AGMODAL: 'MOD_OPEN_AGMODAL',
    CLOSE_AGMODAL: "MOD_CLOSE_AGMODAL"
}

export const openAGModal = () => {
    return {
        payload: {
        },
        type: modalAGTypes.OPEN_AGMODAL
    }
}

export const closeAGModal = () => {
    return {
        payload: {
        },
        type: modalAGTypes.CLOSE_AGMODAL
    }
}
