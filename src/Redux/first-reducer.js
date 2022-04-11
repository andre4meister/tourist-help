const DOWNLOAD_WORK ='DOWNLOAD_WORK'

let initialState = {
    subjects: [
        {
            id: 0, name: 'Планування', url: '', works: [
                {id: 0, name: 'lab1', url: '#'},
                {id: 1, name: 'lab2', url: '#'},
                {id: 2, name: 'lab3', url: '#'},
                {id: 3, name: 'lab4', url: '#'},
            ]
        },
        {id: 1, name: 'Супровід', url: ''},
        {id: 2, name: 'Реклама', url: ''},
        {id: 3, name: 'Досвід', url: ''},
        {id: 4, name: 'Безпека', url: ''},
    ],

}

const firstReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOWNLOAD_WORK:
            alert('downloading...');
        default:
            return state
    }
}

export const downloadWorkAC = () => ({type: DOWNLOAD_WORK});
export default firstReducer;