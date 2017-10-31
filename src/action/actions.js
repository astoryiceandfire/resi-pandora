import APIS from 'src/api.js'
export const LOGINSUCCESS = 'LOGINSUCCESS'
export const ACTIVESIDEBAR = 'ACTIVESIDEBAR'
export const SHOPINGDATA = 'SHOPINGDATA'
export const ACTIVEITYNOTES = 'ACTIVEITYNOTES'


export const loginSuccess = userInfo => ({
  type: LOGINSUCCESS,
  userInfo
})

export const activitynotes = data => ({
  type: ACTIVEITYNOTES,
  data
})



export const requesShopingData = (itemx) => ({
  type: SHOPINGDATA,
  data:itemx
  
})
 export const axiosPosts = (categoryid) => dispatch => {

   let option = {
      page:'1',
      rows:99,
    }

  APIS.ApiqueryExchange(option).then((res)=>{
    dispatch(activitynotes({'activityNotesExchange':res&&res.data?res.data.data.rows:[]}))})

 
}
const fetchPosts = (categoryid) => dispatch => {

   let option = {
      categoryid:categoryid,
      page:'1',
      rows:99,
    }
  APIS.ApiSortGoods(option).then((res)=>{
  	dispatch(requesShopingData({[`categoryid${categoryid}`]:res&&res.data?res.data.data.rows:[]}))})

 
}

export const PostsShopings = (categoryid) => (dispatch, getState) => {

    return dispatch(fetchPosts(categoryid.categoryid))
 
}

