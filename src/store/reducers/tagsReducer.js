const initState = { searchedTags : null,tags : null } ;

const tagsReducer = (state = initState,action) => {
  switch(action.type) {
    case "TAGS" :
      return { ...state,tags : action.data }

    case "SEARCHED_TAGS" :
      return { ...state,searchedTags : action.data }

    case "REMOVE_ALL" :
      return { tags : null ,searchedTags : null }


    default :
      return state ;
  }
  return state ;
}

export default tagsReducer ;
