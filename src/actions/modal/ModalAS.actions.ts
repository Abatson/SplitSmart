
export const modalASTypes = {
    OPEN_ASMODAL: 'MOD_OPEN_ASMODAL',
    CLOSE_ASMODAL: "MOD_CLOSE_ASMODAL"
}

export const openASModal = () => {
    return {
        payload: {
        },
        type: modalASTypes.OPEN_ASMODAL
    }
}

export const closeASModal = () => {
    return {
        payload: {
        },
        type: modalASTypes.CLOSE_ASMODAL
    }
}
