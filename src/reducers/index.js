import {
 LOGINSUCCESS,
 SHOPINGDATA,
 ACTIVEITYNOTES
} from 'src/action/actions'

const userInfo = (state = {}, action) => {
	
  switch (action.type) {
    case LOGINSUCCESS:
      return action.userInfo
    default:
      return state
  }
}


const shopingDatas = (state = {categoryid1:[],
categoryid2:[],
categoryid3:[],
categoryid4:[],
categoryid5:[] }, action) => {
  switch (action.type) {
    case SHOPINGDATA:
    if (Object.values(action.data)[0].length===0) {
     return state
   }
      return {
        ...state,
       ...action.data
      }
    default:
      return state
  }
}
const activityNotesDatas = (state = {activityNotesExchange:[]
}, action) => {
  switch (action.type) {
    case ACTIVEITYNOTES:
    if (Object.values(action.data)[0].length===0) {
     return state
   }
      return {
        ...state,
       ...action.data
      }
    default:
      return state
  }
}




const rootReducer = {
  userInfo,
  shopingDatas,
  activityNotesDatas
}

export default rootReducer
