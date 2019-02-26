
export const modalGSTypes = {
    OPEN_GSMODAL: 'MOD_OPEN_GSMODAL',
    CLOSE_GSMODAL: "MOD_CLOSE_GSMODAL"
}

export const openGSModal = () => {
    return {
        payload: {
        },
        type: modalGSTypes.OPEN_GSMODAL
    }
}

export const closeGSModal = () => {
    return {
        payload: {
        },
        type: modalGSTypes.CLOSE_GSMODAL
    }
}
