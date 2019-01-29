export function manageFriends(state, action){
    switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}

    case 'REMOVE_FRIEND':
      return{...state, friends: [...state.friends.filter(f => {
        return f.id !== action.id
        })
      ]}
    default:
    return state
  }
  
}
