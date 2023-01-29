const initialState = {
    url: "https://openlibrary.org/search.json?title=",
    fname: "",
    lname: "",
    email: "",
    profilImgUrl: "",
    favorites: [],
    SearchResult: []
  }

const reducer = (state=initialState, action) => {
    switch(action.type) {
      case 'set_state':
        return{
          profilImgUrl: action.data.profilUrl,
          id: action.data.id,
          url: state.url,
          fname: action.data.fname,
          lname: action.data.lname,
          email: action.data.email,
          favorites: action.data.favorites,
          SearchResult: state.SearchResult
        }
        break;
      case 'set_search_result':
        return{
          ...state,
          SearchResult: action.data
        };
        break;
      case 'add_to_fav':
        return{
          ...state,
          favorites: state.favorites.concat(action.data)
        }
        break;
      case 'remove_fav':
        let tmp = []
        state.favorites.forEach(book => {
          if(book.cover_i !== action.data){
            tmp.push(book)
          }
        })
        return {
          ...state,
          favorites : tmp
        };
        break;
      default:
        return state;
    }
  }



  export default reducer;