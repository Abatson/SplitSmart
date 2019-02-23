
export const modalTypes = {
    OPEN_MODAL: 'MOD_OPEN_MODAL',
    CLOSE_MODAL: "MOD_CLOSE_MODAL"
}

export const openModal = () => {
    return {
        payload: {
        },
        type: modalTypes.OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        payload: {
        },
        type: modalTypes.CLOSE_MODAL
    }
}
