import { v4 as uuidv4 } from 'uuid';
import $ from "jquery";

const tracking = () => {
  if (localStorage) {
    const uuid = localStorage.getItem("_UUID");
    if (uuid === null) {
      localStorage.setItem("_UUID", uuidv4());
    }
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/v1/trackings",
    data: {
      tracking: {
        uuid: localStorage.getItem("_UUID"),
        page: window.location.pathname
      }
    },
  });
};

export { tracking };
