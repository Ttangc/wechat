import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POST,
  RECEIVE_POST,
  REQUEST_PROFILES,
  RECEIVE_PROFILES,
  REQUEST_PROFILE,
  RECEIVE_PROFILE,
  REQUEST_KEYWORDS,
  RECEIVE_KEYWORDS,
  REQUEST_KEYWORD,
  RECEIVE_KEYWORD,
  SHOW_MESSAGE,
  CLOSE_MESSAGE,
  REQUEST_CONF,
  RECEIVE_CONF,
} from './actions';

const initialState = {
  posts: {},
  post: {},
  profiles: {},
  profile: {},
  keywords: {},
  keyword: {},
  isFetching: false,
  message: {
    open: false,
    content: '',
  },
  // crawl server side config
  conf: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case REQUEST_POST:
    case REQUEST_PROFILES:
    case REQUEST_PROFILE:
    case REQUEST_KEYWORDS:
    case REQUEST_KEYWORD:
    case REQUEST_CONF:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      });
    case RECEIVE_POST:
      return {
        ...state,
        isFetching: false,
        post: action.post
      };
    case RECEIVE_PROFILES:
      return Object.assign({}, state, {
        isFetching: false,
        profiles: action.profiles
      });
    case RECEIVE_PROFILE:
      return {
        ...state,
        isFetching: false,
        profile: action.profile
      };
    case RECEIVE_KEYWORDS:
      return Object.assign({}, state, {
        isFetching: false,
        keywords: action.keywords
      });
    case RECEIVE_KEYWORD:
      return {
        ...state,
        isFetching: false,
        keyword: action.keyword
      };
    case SHOW_MESSAGE:
      return {
        ...state,
        message: {
          open: true,
          content: action.content
        },
      };
    case CLOSE_MESSAGE:
      return {
        ...state,
        message: {
          open: false,
          content: ''
        },
      };
    case RECEIVE_CONF:
      return {
        ...state,
        isFetching: false,
        conf: action.conf,
      };
    default:
      return state;
  }
}

export default reducer;
