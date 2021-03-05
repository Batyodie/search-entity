import axios from "axios";

const API_URL = "/";
let endPoints = [`Email`, `Tel`, `Ip`, `Nickname`, `FullName`];

// делаем запрос к api
const fetchData = (url, method, entity) => {
  const getData = async (urls) => {
    try {
      const response = await axios[method](`${API_URL}${urls} `);
      return {
        success: true,
        data: response.data,
        entity,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        data: undefined,
        entity: {
          ...entity,
          type: `any or ${entity.type}`,
        },
      };
    }
  };

  if (typeof url !== "string") {
    try {
      return url.map(getData);
    } catch (e) {
      console.log(e);
      throw new Error("This url is not Array or String");
    }
  } else {
    try {
      return getData(url);
    } catch (e) {
      console.log(e);
      throw new Error("This url is not Array or String");
    }
  }
};

const fetchAllData = (endPoints, method, entity) => {
  return Promise.allSettled(fetchData(endPoints, method, entity))
    .then((res) => {
      return Promise.allSettled(
        res.map((resObj) => {
          return resObj.value.data;
        })
      );
    })
    .then((resObjData) => {
      return {
        success: true,
        data: [...new Set([].concat(...resObjData))],
        entity,
      };
    })
    .catch((e) => {
      console.log(e);
    });
};

export const request = async ({ url, method, entity }) => {
  try {
    if (entity.type !== "any") {
      const response = await fetchData(url, method, entity);

      return response;
    } else {
      const result = await fetchAllData(endPoints, method, entity);

      return result;
    }
  } catch (e) {
    console.log(e);
  }
};
