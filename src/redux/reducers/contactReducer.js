const initialState = [
    {
        id:0,
        name:'First User',
        email:'test@test.com',
        phone:'9845123456'
    },
    {
        id:1,
        name:'SEcond User',
        email:'second@test.com',
        phone:'1145123456'
    },
]
const contactReducer = (state = initialState, action)=>{
    console.log(action.type);
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=>contact.id === action.payload.id?action.payload:contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact=> contact.id !== action.payload ? contact : null);
            console.log(filterContacts)            
            state = filterContacts
            return state;
        default:
            return state;
    }
}
export default contactReducer;