import dateUtils from './date'

export const hsdateUtil = function(time){
  if (typeof time == 'string') {
    time = Number(time)
  }
  return time?dateUtils.format(time,'yyyy-MM-dd hh:mm:ss'):''
}