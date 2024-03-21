export const getStatusStyle = (status: string) => {
    let styles = ''
    switch (status) {
        case 'PENDING':
            styles = 'text-red-800';
            break;
        case 'IN_PROGRESS':
            styles = 'text-yellow-800';
            break;
        case 'COMPLETED':
            status = 'text-green-800 line-through';
            break;
        default:
            status = 'text-[10px]';

    }
    return styles
}