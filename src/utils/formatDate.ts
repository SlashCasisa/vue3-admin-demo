import moment from 'moment';

function getOneYear() {
  let obj = {
    startTime: '',
    endTime: ''
  }
  obj.startTime = moment().valueOf();
  obj.endTime = moment().add(1, 'Y').valueOf();
  return obj
}
function getTreeYear() {
  let obj = {
    startTime: '',
    endTime: ''
  }
  obj.startTime = moment().valueOf()
  obj.endTime = moment().add(3, 'Y').valueOf()
  return obj;
}
function getFiveYear() {
  let obj = {
    startTime: '',
    endTime: ''
  }
  obj.startTime = moment().valueOf()
  obj.endTime = moment().add(5, 'Y').valueOf()
  return obj;
}

export {
  getOneYear,
  getTreeYear,
  getFiveYear
}