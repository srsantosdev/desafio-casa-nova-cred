import moment from "moment";

function formatDate(date: string) {
  const formatedDate = moment(date).format("DD/MM/YYYY");
  return formatedDate;
}

export default formatDate;
