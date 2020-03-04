export function enterpriseRequest(
    fantasyname,
    cnpj,
    email,
    address,
    city,
    state,
    fone,
    category,
    status,
    agency,
    account
) {
    return {
        type: '@enterprise/ENTERPRISE_REQUEST',
        payload: {
            fantasyname,
            cnpj,
            email,
            address,
            city,
            state,
            fone,
            category,
            status,
            agency,
            account,
        },
    };
}
export function enterpriseFailure() {
    return {
        type: '@enterprise/ENTERPRISE_FAILURE',
    };
}
